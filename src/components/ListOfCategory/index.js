import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesDate () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-abel-k89eih0g4-arcodez.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategory = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesDate()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderlist = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading' ><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }

    </List>
  )

  return (
    <Fragment>
      {renderlist()}
      {showFixed && renderlist(true)}
    </Fragment>
  )
}
