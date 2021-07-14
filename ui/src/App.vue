<template>
  <main>
    <Header>
      <template v-slot:shopping-cart>
        <ShoppingCart :productsQuantity="cartProductsQuantity"></ShoppingCart>
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
import { mapState, mapActions, mapGetters } from "vuex";
import Header from "./components/header.vue";
import Product from "./components/product.vue";
import ShoppingCart from "./components/shopping-cart.vue";

export default {
  name: "App",
  components: { Product, ShoppingCart, Header },
  data() {
    return {};
  },
  computed: {
    ...mapState(["products", "cartProducts"]),
    ...mapGetters(["cartProductsQuantity"]),
  },
  methods: {
    ...mapActions(["onAddProductToCart", "onRemoveProductFromCart", "getProducts"]),
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
