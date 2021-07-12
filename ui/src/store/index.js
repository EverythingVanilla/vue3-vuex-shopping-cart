import axios from "axios";
import { createStore } from "vuex";
import { Logger } from "../utils/logger";

const LOG = new Logger("Store");

export const store = createStore({
  state: {
    products: [],
    cartProducts: new Map(),
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, { sku, product }) {
      state.cartProducts.set(sku, product);
      LOG.log("Product added to cart: ", state.cartProducts.get(product.sku));
    },
    REMOVE_PRODUCT_FROM_CART(state, sku) {
      state.cartProducts.delete(sku);
      LOG.log("Product was removed from cart: ", sku);
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        LOG.log("Fetching products from API");
        const { data: products } = await axios.get("/products");
        commit("SET_PRODUCTS", products);
      } catch (error) {
        console.error(error);
      }
    },
    onAddProductToCart(context, sku) {
      const product = context.state.products.find((product) => product.sku === sku);

      if (!context.state.cartProducts.has(product.sku)) {
        context.commit("ADD_PRODUCT_TO_CART", { sku, product });
      }
    },
    onRemoveProductFromCart(context, sku) {
      context.commit("REMOVE_PRODUCT_FROM_CART", sku);
    },
  },
});
