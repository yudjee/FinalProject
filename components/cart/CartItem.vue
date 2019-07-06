<template>
	<div class="cart-item">
		<div class="cart-item_img">
			<img :src="'products/' + cart.pictureSrc" alt="Item">
		</div>

		<img src="../../assets/del.png" alt="del" class="del" @click="onDelete(cart)">

		<div class="cart-item_description">
			<div class="cart-item_product">
				<div class="cart-item_title"> {{ cart.title }} </div>
				<div class="cart-item_price"> Price: {{cart.price}} </div>
			</div>
			<div class="cart-item_about">
				<div class="cart-item_input">
					<span class="change-quant" @click="cart.quantity--" v-if="cart.quantity > 0">-</span>
					<input type="text" v-model="cart.quantity">
					<span class="change-quant" @click="cart.quantity++">+</span>
				</div>
				<div class="cart-item_total"><b>TOTAL</b> {{ cart.quantity * cart.price }} </div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'CartItem',

		props: ['cart'],

		methods: {
			...mapActions({
	        	deleteCart: 'deleteCart'
	    	}),

		    onDelete(cart) {
		    	this.deleteCart(cart.id)	

		    }
		}
	}
</script>

<style>
	.cart-item {
		display: flex;
		margin: 10px auto;
		flex-direction: row;
		justify-content: space-around;
		border: 1px solid black;
		width: 50%;
	}

	.cart-item_description {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.change-quant {
		color: red;
		font-size: 1.5em;
		font-weight: bold;
		cursor: pointer;
	}

	.del {
		width: 70px;
		height: 70px;
		position: relative;
		left: 35%;
	}

</style>	