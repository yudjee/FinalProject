<template>

	<div class="container">
		<div class="cart">
			<nuxt-link to="/cart" exact><img src="../../assets/cart.jpg" alt="cart" class="cart-img"></nuxt-link>
		</div>
		<div class="product-wrapper" >
			<ProductItem v-for="product in products" :product="product" />
		</div>
	</div>

</template>

<script>
	import ProductItem from './ProductItem.vue'
	import { mapGetters } from 'vuex';
	
	export default {
		name: 'ProductList',

		components: {
			ProductItem
		},

		computed: mapGetters({
      		products: 'getProductList'
    	}),
	}

</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.cart {
		align-self: flex-end;
	}

	.product-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.product-item_input {
		margin: 10px;
	}

	input {
		width: 70px;
		text-align: center;
	}


</style>