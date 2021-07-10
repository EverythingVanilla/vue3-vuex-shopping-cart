<template>
  <main>
    <Header>
      <template v-slot:shopping-cart>
        <ShoppingCart :products="cartProducts" @on-product-removal-from-cart="onRemoveProductFromCart"></ShoppingCart>
      </template>
    </Header>

    <section class="container products">
      <Product
        :key="product.sku"
        :sku="product.sku"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        v-for="product in products"
        @on-add-to-cart="onAddProductToCart"
        @on-remove-from-cart="onRemoveProductFromCart"
        :is-added-to-cart="cartProducts.has(product.sku)"
      />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Header from "./components/header.vue";
import Product from "./components/product.vue";
import ShoppingCart from "./components/shopping-cart.vue";

export default {
  name: "App",
  components: { Product, ShoppingCart, Header },
  data() {
    return {
      products: [],
      cartProducts: new Map(),
    };
  },
  methods: {
    async getProducts() {
      try {
        const { data: products } = await axios.get("/products");
        this.products = products;
      } catch (error) {
        console.error(error);
      }
    },
    onAddProductToCart(sku) {
      const product = this.products.find((product) => product.sku === sku);

      if (!this.cartProducts.has(product.sku)) {
        this.cartProducts.set(product.sku, product);
        console.info("Product added to cart: ", this.cartProducts.get(product.sku));
      }
    },
    onRemoveProductFromCart(sku) {
      this.cartProducts.delete(sku);
      console.info("Product was removed from cart: ", sku);
    },
  },
  async created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";

.products {
  display: grid;
  grid-gap: 30px;
  padding: 40px 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
