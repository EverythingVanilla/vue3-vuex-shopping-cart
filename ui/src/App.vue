<template>
  <main>
    <Header>
      <template v-slot:shopping-cart>
        <ShoppingCart></ShoppingCart>
      </template>
    </Header>

    <section class="container products">
      <Product></Product>
    </section>
  </main>
</template>

<script>
import Header from "./components/header.vue";
import Product from "./components/product.vue";
import ShoppingCart from "./components/shopping-cart.vue";
export default {
  name: "App",
  components: { Product, ShoppingCart, Header },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>
