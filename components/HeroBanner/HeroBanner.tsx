import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './heroBanner.module.css'

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="/images/anchor.svg"
        alt="background image"
        width={500}
        height={600}
        className={styles.floatBg}
      />
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <div className={styles.hero}>
              <h3 className={styles.title}>
                Proactively protect your social media accounts against the most
                <span className="text-smcyber-primary"> advanced hackers.</span>
              </h3>
              <p className="text-dirty-white">
                Real time advanced monitoring, defense and protection for your
                social media accounts
              </p>
              <button className="btn-smcyber-primary">Demo Now</button>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <Image
              src="/icons/security.svg"
              alt="hero banner"
              width={600}
              height={600}
              className={styles.heroIcon}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroBanner
