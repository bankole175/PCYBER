import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './heroBanner.module.css'
import Button from '../Button'
import { Slide } from 'react-awesome-reveal'
import { useRouter } from 'next/router'

const HeroBanner = () => {
  const router = useRouter()
  const requestADemo = () => {
    router.push('request-a-demo')
  }
  return (
    <div className={styles.banner}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/anchor.svg"
        alt="background image"
        width={500}
        height={600}
        className={styles.floatBg}
      />
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={6}>
            <Slide className={styles.hero}>
              <h3 className={styles.title}>
                Proactively protect your social media accounts against the most
                <span className="text-smcyber-primary"> advanced hackers.</span>
              </h3>
              <p className="text-dirty-white">
                Real time advanced monitoring, defense and protection for your
                social media accounts
              </p>
              <Button onClick={() => requestADemo()}>Request a Demo</Button>
            </Slide>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <Slide direction={'right'}>
              <Image
                src="/icons/security.svg"
                alt="hero banner"
                width={600}
                height={600}
                className={styles.heroIcon}
              />
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroBanner
