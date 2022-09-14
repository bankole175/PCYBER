import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'
import Button from '../Button'
import { useRouter } from 'next/router'
import { Slide, Zoom } from 'react-awesome-reveal'

type Props = {
  noBackground?: boolean | undefined
}

const Footer = (props: Props) => {
  const { noBackground } = props

  const router = useRouter()
  const goTo = (url: string) => {
    router.push(url)
  }
  return (
    <div className={`${noBackground ? '' : 'gradient-dark'}`}>
      <Container className="pt-section pb-2">
        <Row className="justify-content-between">
          <Col lg={5} className="mb-3">
            <Slide>
              <span className={`d-flex align-items-center ${styles.logo}`}>
                <Image src="/icons/logo.svg" alt="" width={50} height={50} />
                <span className="text-smcyber-primary ms-n2">
                  PLATFORMCYBER
                </span>
              </span>
              <p className={styles.aboutUs}>
                PlatformCyber is the only solution custom-built to specialize in
                offering full social media account protection across all
                platforms(facebook,twitter,instagram,tiktok,etc), with a single
                AI powered detection and correlation engine for efficient
                monitoring and protection from hackers.
              </p>
            </Slide>
          </Col>
          <Col lg={2} className="mb-3">
            <Slide>
              <p className="text-white">Quick Links</p>

              <p className={styles.li}>
                <Link href="/">
                  <a className={styles.a}>Home</a>
                </Link>
              </p>
              <p className={styles.li}>
                <Link href="/contact-us">
                  <a className={styles.a}>Contact Us</a>
                </Link>
              </p>
              <p className={styles.li}>
                <Link href="/#services">
                  <a className={styles.a}>Services</a>
                </Link>
              </p>
              <p className={styles.li}>
                <Link href="/#about-us">
                  <a className={styles.a}>About Us</a>
                </Link>
              </p>
            </Slide>
          </Col>
          <Col lg={2} className="mb-3">
            <Slide direction={'right'}>
              <p className="text-white">Our Services</p>

              <p className={styles.li}>Dark Web Monitoring</p>
              <p className={styles.li}>
                Account Hijacking Monitoring and Protection
              </p>
              <p className={styles.li}>Security Awareness Training</p>
              <p className={styles.li}>24/7 Support Availability</p>
            </Slide>
          </Col>
          <Col lg={1} className="offset-lg-1 mb-3">
            <Slide direction={'right'}>
              <div className={styles.mln20}>
                <p className="text-white">Contact Us</p>

                <div className="text-nowrap">
                  <Button onClick={() => goTo('/contact-us')}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </Slide>
          </Col>
        </Row>
        <Zoom>
          <p className={styles.reserved}>
            {new Date().getFullYear()} Platform Cyber Inc. All Right Reserved
          </p>
        </Zoom>
      </Container>
    </div>
  )
}

export default Footer
