import { Container } from 'react-bootstrap'
import Button from '../Button'
import { Zoom } from 'react-awesome-reveal'
import { useRouter } from 'next/router'

const AboutUs = () => {
  const router = useRouter()
  const requestADemo = () => {
    router.push('request-a-demo')
  }

  return (
    <Container className="mb-section" id={'about-us'}>
      <Zoom className="gradient-dark p-3">
        <h3 className="text-center mb-4">About Us</h3>
        <p className="lh-35">
          SMCyber is the only solution custom-built to specialize in offering
          full social media account protection across all
          platforms(facebook,twitter,instagram,tiktok,etc), with a single AI
          powered detection and correlation engine for efficient monitoring and
          protection from hackers.
        </p>
        <p className="lh-35">
          Our platform ensures you get “extra security” beyond the
          out-of-the-box generic security provided by social media companies
          effectively reducing your risk and protecting your social media brand.
        </p>
        <p className="lh-35">
          Our team consists of senior security engineers with solid experience
          protecting the biggest financial services companies, energy companies
          and healthcare companies. We decided to band together, utilizing
          skills learnt protecting big enterprise companies to build
          best-in-class monitoring and protection systems for social media
          accounts.
        </p>
        <p className="lh-35">
          Get a live demo of SMCyber, the best and most seamless way to protect
          your social media accounts and website without stress. In an hour or
          less our technical Sales engineers will walk you through the SMCyber
          platform and deep dive into any functionality you’d like more details
          on.
        </p>
        <div className="text-center mt-5 mb-4">
          <Button onClick={() => requestADemo()}>Request a Demo</Button>
        </div>
      </Zoom>
    </Container>
  )
}

export default AboutUs
