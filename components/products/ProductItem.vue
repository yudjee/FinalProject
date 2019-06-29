<template>
	<div class="product-item">
		<div class="product-item_img">
			<img src="../../assets/item.png" alt="Item">
		</div>
		<div class="product-item_title">
			{{ title }}
		</div>
		<div class="product-item_description">
			{{ description }}
		</div>
		<span class="product-item_price"> Price: {{ price }}</span>
		<form >
			<input type="text" class="product-item_input" placeholder="кол-во" v-model="quantity">
			<button class="button" @click.prevent="onAddProduct(product, quantity)"> Купить </button>
		</form>


	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		data() {
			return {
				id: this.product.id,
				title: this.product.title,
				description: this.product.description,
				price: this.product.price,
				quantity: ''
			}
		},
		name: 'ProductItem',

		props: ['product'],

		methods: {
			...mapActions({
				add: 'addProduct'
			}),
			onAddProduct(product, quantity) {
				this.add({product, quantity});
				this.quantity = ''
			}
		}
	}
</script>

<style>
	.product-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 300px;
		border: 1px solid black;
		padding: 10px;
		margin: 20px;
	};

</style>