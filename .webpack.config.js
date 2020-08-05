module.exports = config => {
  config.target = 'electron-renderer';
  config.externals = { grpc: 'require(\'grpc\')' };
  return config;
}
