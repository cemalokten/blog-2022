module.exports = function(config) {
  config.devServer.proxy = [
    {
      path: '/api/**',
      target: 'http://localhost:5000',
    }
  ];
};
