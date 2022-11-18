import { getAllCards } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import { useState } from 'react'

export default function Index({ allCards }) {
  const [filter, setFilter] = useState(null)
  const cards = filter ? allCards.filter(item => item.title.includes(filter)) : allCards
  return (
    <>
      <Head>
        <title>Axelar challenge with {CMS_NAME}</title>
      </Head>
      <Banner />
      <Navbar />
      <Hero setFilter={setFilter} />
      <Cards data={cards} />
    </>
  )
}

export async function getStaticProps() {
  const allCards = await getAllCards()
  return {
    props: { allCards },
  }
}
