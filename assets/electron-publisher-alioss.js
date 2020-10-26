const OSS = require('ali-oss');
const { Arch } = require('builder-util');
const { HttpPublisher } = require('electron-publish');
const { basename, resolve } = require('path');

class AliOssPublisher extends HttpPublisher {
    constructor(context, publishConfig, useSafeArtifactName) {
        super(context);
        this.providerName = 'alioss';
        this.useSafeName = true;
        this.useSafeName = useSafeArtifactName || true;
        let config = publishConfig;
        if (publishConfig.localConfig) {
            const localConfig = require(resolve(this.context.packager.appDir, config.localConfig));
            config = Object.assign({}, config, localConfig);
        }
        this.config = Object.assign({ resumable: true }, config);
        this.client = new OSS({
            region: config.region,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            bucket: config.bucket,
            timeout: config.timeout || 60000,
        });
    }
    async upload(task) {
        const fileName = (this.useSafeName ? task.safeArtifactName : null) || basename(task.file);
        const os = task.packager['platform'].buildConfigurationKey || task.packager['platform'].name;
        let archName = Arch[Arch.x64];
        if (!task.arch && task.arch !== 0) {
            if (task.packager['platform'].nodeName.indexOf('32') >= 0) {
                archName = Arch[Arch.ia32];
            }
        } else {
            archName = Arch[task.arch];
        }
        await this.doUpload(fileName, task.file, archName, os);
    }
    async doUpload(fileName, filePath, archName, os) {
        const config = this.config;
        const appInfo = this.context.packager.appInfo;
        let uploadName = fileName;
        if (config.path) {
            uploadName = config.path
              .replace(/\${name}/g, appInfo.name)
              .replace(/\${os}/g, os)
              .replace(/\${arch}/g, archName)
              .replace(/\${filename}/g, fileName);
        }
        this.context.cancellationToken.createPromise(async (resolve, reject) => {
            const { resumable } = this.config;
            const maxResume = this.config.maxResume || 5;
            let checkpoint;
            try {
                for (let i = 0; i < (resumable ? maxResume : 1); i++) {
                    // try to resume the upload
                    console.log(`${uploadName}: uploading...🕑 `);
                    const result = await this.client.multipartUpload(uploadName, filePath, {
                        progress: async (percentage, cpt) => {
                            checkpoint = cpt;
                            if (this.config.verbose && cpt) {
                                console.log(`${uploadName}: ${cpt.doneParts.length}\/${Math.ceil(cpt.fileSize / cpt.partSize)}(${(percentage * 100).toFixed(2)}%)`);
                            }
                        },
                        checkpoint: checkpoint,
                        meta: {}
                    });
                    resolve(result);
                    console.log(`${uploadName}: upload success...✅ `);
                    break; // break if the upload success;
                }
            } catch (e) {
                if (e.code === 'ConnectionTimeoutError') {
                    console.error("Woops,Timeout!");
                }
                console.error(e);
            }
        });
    }
    toString() {
        return `${this.providerName}(${this.config.bucket})`;
    }
}

exports.default = AliOssPublisher;
