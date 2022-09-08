import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Service from '../components/Service'
import Metric from '../components/Metric'
import Section from '../components/Section'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const listItems = [
  {
    id: 1,
    img: '/icons/tiktok.png',
    text: 'Tiktok',
  },
  {
    id: 2,
    img: '/icons/instagram.png',
    text: 'Instagram',
  },
  {
    id: 3,
    img: '/icons/facebook.png',
    text: 'Facebook',
  },
  {
    id: 4,
    img: '/icons/twitter.png',
    text: 'Twitter',
  },
  {
    id: 5,
    img: '/icons/web.svg',
    text: 'Web domains',
  },
]
const title =
  'AI powered engine to continuously block potential attacks and protect social media accounts across'

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>PLATFORM CYBER</title>
        <meta name="description" content="platformCyber" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <Header />
      <HeroBanner />
      <Service />
      <Section
        img={'/images/socialSecurity.jpg'}
        title={title}
        bg={'gradient-dark'}
        listItems={listItems}
      />
      <Metric />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Home
