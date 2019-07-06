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

.cart-img {
	height: 150px;
	width: auto;
}

.product-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.product-item_input {
	margin: 10px;	}

	input {
		width: 70px;
		text-align: center;
	}

	.button {
		margin-left: 15px;
		display: inline-block;
		color: black;
		font-size: 110%;
		font-weight: 700;
		text-decoration: none;
		user-select: none;
		padding: .25em .5em;
		outline: none;
		border: 1px solid rgb(250,172,17);
		border-radius: 7px;
		background: rgb(255,212,3) linear-gradient(rgb(255,212,3), rgb(248,157,23));
		box-shadow: inset 0 -2px 1px rgba(0,0,0,0), inset 0 1px 2px rgba(0,0,0,0), inset 0 0 0 60px rgba(255,255,0,0);
		transition: box-shadow .2s, border-color .2s;
	} 
	.button:hover {
		box-shadow: inset 0 -1px 1px rgba(0,0,0,0), inset 0 1px 2px rgba(0,0,0,0), inset 0 0 0 60px rgba(255,255,0,.5);
	}
	.button:active {
		padding: calc(.25em + 1px) .5em calc(.25em - 1px);
		border-color: rgba(177,159,0,1);
		box-shadow: inset 0 -1px 1px rgba(0,0,0,.1), inset 0 1px 2px rgba(0,0,0,.3), inset 0 0 0 60px rgba(255,255,0,.45);
	}


</style>