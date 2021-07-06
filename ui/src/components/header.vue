<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <h1 class="header__logo__title">
          myzone
          <span>:)</span>
        </h1>
      </div>
      <slot name="shopping-cart"></slot>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 0;
  background-color: $color-dark;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    &__title {
      font-size: 25px;
      color: $color-white;

      span {
        color: $color-highlight;
      }
    }
  }
}
</style>
