import './Scenes.scss';
import React from 'react';
import { showDialog } from '../../../util/dialog';
import { connectScenes, ScenesProps } from '../../context/ScenesProvider';
import { AddSceneResult, Scene } from '../../../types/obs';
import { createScene } from '../../../util/obs';
import { Display } from '../../shared/Display/Display';
import { obsHeadlessCreateScene } from '../../../util/obs-headless';

type Props = ScenesProps;

export const Scenes = connectScenes(
  class Scenes extends React.Component<Props> {

    async addScene() {
      const result = await showDialog<AddSceneResult>({
        component: 'AddSceneDialog',
        title: 'Add Scene',
        width: 400,
        height: 300,
      });
      if (result) {
        const scene = await createScene(result.name, 'ffmpeg_source', { input: result.url })
        await obsHeadlessCreateScene(scene);
        this.props.addScene(scene);
      }
    }

    onDisplayClicked(scene: Scene) {
      this.props.setPreviewScene(scene);
    }

    render() {
      return (
        <div className='scenes'>
          <div className="studio-controls-top">
            <h2 className="studio-controls__label">
              Scenes
            </h2>
            <div>
              <i
                className="icon-add icon-button icon-button--lg"
                onClick={() => this.addScene()}
              />
            </div>
          </div>
          <div className='display-list'>
            {
              this.props.scenes.map(scene =>
                <div
                  key={scene.id}
                  className={`display-wrapper ${scene.id === this.props.previewScene?.id ? 'selected' : ''}`}
                  onClick={() => this.onDisplayClicked(scene)}
                >
                  <Display sourceId={scene.id} />
                </div>
              )
            }
          </div>
        </div>
      );
    }
  });
