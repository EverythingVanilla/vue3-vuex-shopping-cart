export default {
  install(app) {
    app.config.globalProperties.$filters = {
      toUSDCurrency(value) {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
      },
    };
  },
};
