<template>
  <section class="container">
    <ProductList />
  </section>
</template>

<script>
  import ProductList from "../components/products/ProductList";

  export default {
    components: { ProductList },
    layout: 'home',
    head () {
      return {
        title: 'Shop',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
  }
</script>
