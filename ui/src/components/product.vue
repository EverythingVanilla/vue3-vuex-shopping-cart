<template>
  <article class="product">
    <picture class="product__image">
      <source />
      <img src="https://m.media-amazon.com/images/I/6198qwUYaOS._AC_UL320_.jpg" alt="" />
    </picture>
    <h1 class="product__name">
      TOSING 008 Micrófono de Karaoke Inalámbrico Bluetooth, Potencia de Volumen Más Alta 10W, Más Bajo, 3-en-1 Máquina
    </h1>
    <h2 class="product__price">33.99e</h2>
  </article>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.product {
  padding: 10px;
  max-width: 300px;
  background-color: $color-white;
  box-shadow: 1px 1px 5px #ddd;

  &__image {
    img,
    source {
      margin: 0 auto;
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 500;
  }

  &__price {
    font-size: 24px;
  }
}
</style>
