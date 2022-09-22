import { NextPage } from 'next'
import Head from 'next/head'
import Demo from '../components/Demo'
import Footer from '../components/Footer'
import Script from 'next/script'

const RequestADemo: NextPage = () => {
  return (
    <>
      <Script
        src="https://cdn.livetrafficfeed.com/static/v4/live.js"
        strategy="lazyOnload"
      />
      <div className="demo">
        <Head>
          <title>Demo - PLATFORMCYBER</title>
          <meta name="description" content="Demo" />
          <meta name="LTF_verify" content="c7ca59687c1edf98a5540358bd53e4ca" />
          <link rel="icon" href="/icons/logo.svg" />
          <a
            href="http://livetrafficfeed.com"
            data-num="10"
            data-width="0"
            data-responsive="1"
            data-time="America%2FNew_York"
            data-root="0"
            data-cheader="2853a8"
            data-theader="ffffff"
            data-border="2853a8"
            data-background="ffffff"
            data-normal="000000"
            data-link="135d9e"
            target="_blank"
            rel="noreferrer"
            id="LTF_live_website_visitor"
          >
            Website Counter
          </a>
          <noscript>
            <a href="http://livetrafficfeed.com">Website Counter</a>
          </noscript>
        </Head>
        <Demo />
        <Footer />
      </div>
    </>
  )
}
export default RequestADemo
