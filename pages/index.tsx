import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Service from '../components/Service'
import Metric from '../components/Metric/Metric'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SMCYBER</title>
        <meta name="description" content="smcyber" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <Header />
      <HeroBanner />
      <Service />
      <Metric />
    </div>
  )
}

export default Home
