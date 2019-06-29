import { ADD_PRODUCT, DELETE_CART } from "./mutation-types";

export default {
	[ADD_PRODUCT](state, product) {
		state.carts.push(product)
	},

	[DELETE_CART](state, id) {
		console.log(id)
		const index = state.carts.findIndex(cart => cart.id === id);
		state.carts.splice(index, 1);
	}
}
