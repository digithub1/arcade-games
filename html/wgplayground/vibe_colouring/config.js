// Настройка клиентского приложения - ONLINE MODE
(function configureApp() {
  if (typeof window === 'undefined' || !window.location) {
    window.APP_CONFIG = Object.assign({ API_BASE_URL: 'http://localhost:3000/api' }, window.APP_CONFIG || {});
    return;
  }

  const { protocol, hostname, port } = window.location;
  const normalizedOrigin = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  const devPorts = new Set(['5173', '4173', '5174']);
  const defaultApiBase = devPorts.has(port)
    ? `${protocol}//${hostname}:3000/api`
    : `${normalizedOrigin.replace(/\/$/, '')}/api`;

  // Используем серверные ассеты через PHP-роутер
  const defaultLevelsMetadataUrl = 'https://nedokoder.com/vibe-drawing/levels/media.php?path=index.json';
  const defaultLevelsAssetsBaseUrl = 'https://nedokoder.com/vibe-drawing/levels/media.php?path=';

  const defaults = {
    API_BASE_URL: defaultApiBase,
  };

  if (defaultLevelsMetadataUrl) {
    defaults.LEVELS_METADATA_URL = defaultLevelsMetadataUrl;
  }
  if (defaultLevelsAssetsBaseUrl) {
    defaults.LEVELS_ASSETS_BASE_URL = defaultLevelsAssetsBaseUrl;
  }

  window.APP_CONFIG = Object.assign(defaults, window.APP_CONFIG || {});
  console.log('🌐 Config: ONLINE mode');
})();
