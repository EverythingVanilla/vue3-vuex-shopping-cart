<template>
  <div class="shopping-cart">
    <!-- CART LOGO -->
    <div class="shopping-cart__logo">
      <img src="/assets/img/shopping-cart.svg" alt="myzone :)" />
      <h2 class="shopping-cart__logo__products-count">0</h2>
      <h2 class="shopping-cart__logo__products-count-label">item(s)</h2>
    </div>

    <!-- CART CONTENT -->
    <div v-show="isContentVisible" class="shopping-cart__content"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isContentVisible: false,
    };
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
}
</style>
