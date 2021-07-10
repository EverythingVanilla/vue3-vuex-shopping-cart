<template>
  <div class="shopping-cart-products debug">
    <header class="shopping-cart-products__header">
      <h1 class="shopping-cart-products__title">Cart</h1>
    </header>

    <div class="shopping-cart-products__content">
      <article v-for="product in productsList" :key="product.sku" class="shopping-cart-products__product product">
        <img class="product__image" :src="product.image" :alt="product.name" />
        <div class="product__content">
          <span>{{ product.name }}</span>
          <h1>{{ $filters.toUSDCurrency(product.price) }}</h1>
          <button @click="onProductRemoval(product.sku)" class="button">Remove</button>
        </div>
      </article>
    </div>

    <footer class="shopping-cart-products__footer">
      <div class="shopping-cart-products__footer__total">
        <span>Total</span>
        <h2>{{ getTotal }}</h2>
      </div>
      <div class="shopping-cart-products__footer__call-to-action">
        <button class="button button--primary">Checkout</button>
        <button class="button" @click="onCloseModal">Close</button>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    products: { type: Map },
  },
  data() {
    return {
      total: 0,
      productsList: [],
    };
  },
  mounted() {
    this.prepareProducts(this.products);
  },
  computed: {
    getTotal() {
      return this.$filters.toUSDCurrency(this.total);
    },
  },
  methods: {
    prepareProducts(products) {
      this.productsList = [];
      this.total = 0;
      for (let [, product] of products) {
        this.productsList.push(product);
        this.total += product.price;
      }
    },
    onCloseModal() {
      this.$emit("onClose");
    },
    onProductRemoval(sku) {
      this.$emit("onProductRemoval", sku);
    },
  },
  watch: {
    products: {
      deep: true,
      handler(products) {
        console.log("New products", products);
        this.prepareProducts(products);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.shopping-cart-products {
  height: 80%;
  width: 600px;
  padding: 40px;
  border-radius: 3px;
  background-color: #fff;

  $footer-height: 110px;
  $header-height: 50px;

  &__header {
    height: $header-height;
  }

  &__content {
    overflow-y: auto;
    height: calc(100% - #{$footer-height + $header-height});
  }

  &__footer {
    padding-top: 10px;
    height: $footer-height;

    &__call-to-action {
      display: grid;
      margin-top: 10px;
      grid-column-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }
}

.product {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  margin-bottom: 10px;

  &__image {
    width: 100px;
  }

  &__content {
    padding-left: 10px;
  }
}
</style>
