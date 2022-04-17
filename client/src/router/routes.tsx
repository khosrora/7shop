import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../components/products/Products'
import EditProduct from '../components/products/EditProduct'
import EditCategory from '../components/categories/EditCategory'
import Categories from '../components/categories/Categories'

interface RouteItem {
    path:string;
    component:any;
}

const routes:RouteItem[] = [
  {
    path: '/createProduct',
    component: EditProduct
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/categories/edit',
    component: EditCategory
  },
  {
    path: '/categories',
    component: Categories
  },
]

const RenderRoutes = () => {
  return (<Switch>
    {
      routes.map((route:RouteItem, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))
    }
  </Switch>)
}
export default RenderRoutes
