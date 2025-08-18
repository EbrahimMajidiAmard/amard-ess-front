let config = null;
let baseApi = null;

async function initConfig() {
  if (!config) {
    const response = await fetch('/config.json')
    config = await response.json()
  }
  return config
}

async function getBaseApi() {
  if (!baseApi) {
    const cfg = await initConfig()
    baseApi = cfg.apiBaseUrl
  }
  return baseApi
}

export {initConfig, getBaseApi}