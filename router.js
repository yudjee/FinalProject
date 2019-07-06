import Vue from 'vue'
import Router from 'vue-router'

import ProductList from './components/products/ProductList'
import CartList from './components/cart/CartList'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'first',
        path: '/',
        redirect: '/products/'
      },
      {
        name: 'products',
        path: '/products/',
        component: ProductList
      },
      {
        name: 'cart',
        path: '/cart/',
        component: CartList
      }
    ]
  })
}
