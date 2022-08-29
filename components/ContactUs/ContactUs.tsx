import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { SelectInput, TextArea, TextField } from '../../Input'
import Button from '../Button'
import styles from './contactUs.module.css'
import { Zoom } from 'react-awesome-reveal'

const ContactUs = () => {
  const options = [
    { label: "Implementing SMCyber's WAAP Solution", value: 'solution' },
    { label: 'A Career at SMCyber', value: 'career' },
    {
      label: "Engaging with SMCyber's Support Team",
      value: 'support',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ]

  return (
    <>
      <Zoom>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactUs}>
          <Container className={styles.card}>
            <h6 className="fw-semibold mb-4">
              <span className="d-flex align-items-center">
                <Image
                  src={'/icons/forward-arrow.svg'}
                  width={20}
                  height={20}
                  alt={'arrow icon'}
                />
                <span className="ms-2 text-dark">Send us a message</span>
              </span>
            </h6>
            <form action="">
              <Row>
                <Col lg={6}>
                  <TextField
                    label={'First Name'}
                    type={'text'}
                    required={true}
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    label={'Last Name'}
                    type={'text'}
                    required={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <TextField label={'Email'} type={'email'} required={true} />
                </Col>
                <Col lg={6}>
                  <TextField
                    label={'Phone Number'}
                    type={'tel'}
                    required={true}
                  />
                </Col>
              </Row>
              <SelectInput
                label={'What are you protecting?'}
                required={true}
                options={options}
              />
              <TextField
                label={'How did you hear about us'}
                type={'email'}
                required={true}
              />
              <TextArea
                label={'Anything specific you are looking to learn?'}
                row={6}
              />
              <Button>Send Message</Button>
            </form>
          </Container>
        </div>
      </Zoom>
    </>
  )
}

export default ContactUs
