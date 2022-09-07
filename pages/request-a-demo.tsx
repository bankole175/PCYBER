import { NextPage } from 'next'
import Head from 'next/head'
import Demo from '../components/Demo'
import Footer from '../components/Footer'

const RequestADemo: NextPage = () => {
  return (
    <div className="demo">
      <Head>
        <title>PLATFORMCYBER</title>
        <meta name="description" content="smcyber" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <Demo />
      <Footer />
    </div>
  )
}
export default RequestADemo
