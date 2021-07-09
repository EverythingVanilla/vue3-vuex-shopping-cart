<template>
  <div class="shopping-cart-products">
    <header class="shopping-cart-products__header">
      <h1 class="shopping-cart-products__title">Cart</h1>
    </header>

    <div class="shopping-cart-products__content">
      <article v-for="product in productsList" :key="product.sku" class="shopping-cart-products__product product">
        <img class="product__image" :src="product.image" :alt="product.name" />
        <div class="product__content">
          <span>{{ product.name }}</span>
          <h1>{{ product.price }}</h1>
        </div>
      </article>
    </div>

    <footer class="shopping-cart-products__footer">
      <button class="button button--primary">Checkout</button>
      <button class="button" @click="onCloseModal">Close</button>
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
    return {};
  },
  computed: {
    productsList() {
      const products = [];
      for (let [, product] of this.products) {
        products.push(product);
      }

      return products;
    },
  },
  methods: {
    onCloseModal() {
      this.$emit("onClose");
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

  &__header {
    height: 50px;
    border: 1px solid red;
  }

  &__content {
    overflow-y: scroll;
    border: 1px solid red;
    height: calc(100% - 100px);
  }

  &__footer {
    height: 50px;
    display: grid;
    padding-top: 10px;
    grid-column-gap: 10px;
    border: 1px solid red;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    button {
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
