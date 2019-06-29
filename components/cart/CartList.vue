<template>
	<div> 
		<header><nuxt-link to="/" exact><img src="../../assets/back.png" alt="back" class="back"></nuxt-link></header>

		<div class="cart-wrapper">
			<CartItem v-for="cart in carts" :cart="cart" />
		</div>

	</div>
</template>

<script>
	import CartItem from './CartItem'
	import { mapGetters } from 'vuex';
	
	export default {
		name: 'CartList',

		components: {
			CartItem
		},

		computed: mapGetters({
      		carts: 'getCartList'
    	}),
	}
</script>

<style scoped>
	.cart-wrapper {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	img {
		width: 50px;
		height: auto;
		margin: 20px;
	}
</style>