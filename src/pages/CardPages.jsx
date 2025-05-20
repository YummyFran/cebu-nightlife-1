import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import pagesData from '../data/cardsPages'

const CardPages = () => {
    const {pathname} = useLocation()
    const {slug} = useParams()
    const category = pathname.split('/')[1]
    const Page = pagesData[category][slug]

    if(!Page) {
        return <main>404 Not Found. Make sure to register this route on data/cardsPages.js</main>
    }
  return (
    <Page />
  )
}

export default CardPages