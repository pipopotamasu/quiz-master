const VueAxiosPlugin = {};
export default (VueAxiosPlugin.install = function(
  Vue,
  { axios, sendCsrf = false }
) {
  if (!axios) {
    console.error("axiosが設定されていません。");
    return;
  }

  if (sendCsrf) {
    const token = document
      .getElementsByName("csrf-token")[0]
      .getAttribute("content");
    axios.defaults.headers.common["X-CSRF-Token"] = token;
  }

  Vue.axios = axios;

  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios;
      }
    }
  });
});
