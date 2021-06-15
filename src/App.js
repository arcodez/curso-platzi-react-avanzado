import React, { Fragment } from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { GlobalStyles } from './styles/GlobalStyles'

export function App () {
  return (
    <Fragment>
      <GlobalStyles />
      <ListOfCategory />
    </Fragment>
  )
}
