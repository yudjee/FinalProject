<template>
	<div class="product-item">
		<div class="product-item_img">
			<img :src="pictureSrc" alt="Item" class="img_item">
		</div>
		<div class="product-item_title">
			<strong>{{ title }}</strong>
		</div>
		<div class="product-item_description">
			{{ description }}
		</div>
		<span class="product-item_price"> <strong>Price: </strong> {{ price }}</span>
		<form >
			<span class="change-quant" @click="quantity--" v-if="quantity > 0">-</span>
			<input type="text" class="product-item_input" placeholder="кол-во" v-model="quantity">
			<span class="change-quant" @click="quantity++">+</span>
			<a class="button" @click.prevent="onAddProduct(product, quantity)"> Купить </a>
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
				pictureSrc: this.product.pictureSrc,
				quantity: 1
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
		justify-content: flex-end;
		width: 300px;
		border: 1px solid black;
		border-radius: 10px;
		padding: 10px;
		margin: 20px;
	};

	.product-item_img {
		align-self: center;
	}

	.product-item_title {
		margin: 20px;
	}

</style>