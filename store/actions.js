import { ADD_PRODUCT, DELETE_CART } from "./mutation-types";

export default {
	addProduct({ commit }, {product, quantity}) {
		commit(ADD_PRODUCT, {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity
		})
	},

	deleteCart({ commit }, id) {
		commit(DELETE_CART, id)
	}
}
