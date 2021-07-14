<template>
  <div class="shopping-cart debug">
    <!-- CART LOGO -->
    <div class="shopping-cart__logo" @click="toggleShoppingCartContent">
      <img src="/assets/img/shopping-cart.svg" alt="myzone :)" />
      <h2 class="shopping-cart__logo__products-count">{{ productsQuantity }}</h2>
      <h2 class="shopping-cart__logo__products-count-label">item(s)</h2>
    </div>

    <!-- CART CONTENT -->
    <div v-if="isContentVisible" class="shopping-cart__content">
      <shopping-cart-products @on-close="toggleShoppingCartContent"></shopping-cart-products>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ShoppingCartProducts from "./shopping-cart-products.vue";

export default defineComponent({
  components: {
    ShoppingCartProducts,
  },
  props: {
    productsQuantity: { type: Number },
  },
  data() {
    return {
      isContentVisible: false,
    };
  },
  methods: {
    toggleShoppingCartContent() {
      this.isContentVisible = !this.isContentVisible;
      document.body.style.overflowY = this.isContentVisible ? "hidden" : "scroll";
    },
  },
});
</script>

<style lang="scss" scoped>
.shopping-cart {
  &__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    padding: 10px 20px;
    color: $color-white;
    border: 1px solid $color-dark;

    img {
      width: 30px;
      margin-right: 10px;
    }

    &:hover {
      border: 1px solid $color-white;
    }

    &__products-count {
      margin-right: 5px;
      color: $color-highlight;
    }

    &__products-count-label {
      font-size: 16px;
    }
  }

  &__content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
