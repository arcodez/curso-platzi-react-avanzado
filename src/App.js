import React, { Fragment } from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export function App () {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <ListOfCategory />
      <ListOfPhotoCards />
    </Fragment>
  )
}
