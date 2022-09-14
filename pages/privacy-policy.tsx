import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Privacy from '../components/PrivacyPolicy'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>PLATFORMCYBER</title>
        <meta name="description" content="PLATFORMCYBER" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <Header />
      <Privacy />
      <Footer noBackground={true} />
    </div>
  )
}

export default PrivacyPolicy
