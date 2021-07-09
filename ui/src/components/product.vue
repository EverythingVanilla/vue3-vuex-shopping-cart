<template>
  <article class="product">
    <div class="product__image">
      <img :src="image" lazy :alt="name" />
    </div>
    <h1 class="product__name">
      {{ getName }}
    </h1>
    <h2 class="product__price">{{ price }}</h2>
    <button
      v-if="!isAddedToCart"
      :disabled="isAddedToCart"
      @click="onAddToCart(sku)"
      class="button product__call-to-action"
    >
      Add to cart
    </button>
    <button v-else class="button product__call-to-action" @click="onRemoveFromCart(sku)">Remove from cart</button>
  </article>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    sku: { type: Number },
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    isAddedToCart: { type: Boolean },
  },
  data() {
    return {
      NAME_MAX_CHAR: 57,
    };
  },
  computed: {
    getName() {
      const dots = this.name.length > this.NAME_MAX_CHAR ? "..." : "";
      return this.name.substr(0, this.NAME_MAX_CHAR) + dots;
    },
  },
  methods: {
    onAddToCart(sku) {
      console.info("Emitting onAddToProduct with the sku: ", sku);
      this.$emit("onAddToCart", sku);
    },
    onRemoveFromCart(sku) {
      console.info("Emitting onRemoveFromCart with the sku: ", sku);
      this.$emit("onRemoveFromCart", sku);
    },
  },
});
</script>

<style lang="scss" scoped>
.product {
  max-width: 300px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__image {
    // border: 1px solid red;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;

    img {
      height: 90%;
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  &__name {
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__price {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 12px;
    height: 100px;
    margin-bottom: 20px;
  }

  &__call-to-action {
    width: 100%;
  }
}
</style>
