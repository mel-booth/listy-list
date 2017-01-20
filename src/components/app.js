import React from 'react'
import Footer from './footer'
import AddItem from '../containers/addItem'
import VisibleItemList from '../containers/visibleItemList'

const App = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
)
