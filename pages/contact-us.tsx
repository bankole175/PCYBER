import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const ContactUsPage: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>SMCYBER</title>
        <meta name="description" content="smcyber" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <Header />
      <ContactUs />
      <Footer noBackground={true} />
    </div>
  )
}

export default ContactUsPage
