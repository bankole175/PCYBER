import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { SelectInput, TextArea, TextField } from '../../Input'
import Button from '../Button'
import styles from './contactUs.module.css'
import { Zoom } from 'react-awesome-reveal'
import emailjs, { init } from '@emailjs/browser'
import React, { useEffect, useState } from 'react'
import { ContactFormT } from '../../utils/type'
import { useForm } from '../../hooks'

const ContactUs = () => {
  init('1AsgDhUYxtL7OsjYZ')
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

  const [contactUsForm, setContactUsForm] = useState<ContactFormT>()
  const { handleChange, values, errors, handleSubmit } = useForm()

  const prepareContactUsForm = () => {
    const contactForm = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phoneNumber: undefined,
      protecting: undefined,
      aboutUs: undefined,
      learn: undefined,
    }

    setContactUsForm(contactForm)
  }

  useEffect(() => {
    prepareContactUsForm()
  }, [])

  const submit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('you')
    emailjs.sendForm('service_okhi179', 'template_3e536ak', '').then()
  }

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
            <form>
              <Row>
                <Col lg={6}>
                  <TextField
                    id={'firstName'}
                    name={'firstName'}
                    value={'firstName'}
                    placeholder={'John'}
                    label={'First Name'}
                    type={'text'}
                    formObject={contactUsForm}
                    error={
                      contactUsForm?.firstName &&
                      contactUsForm?.firstName.length <= 0
                    }
                    onChange={(event) =>
                      handleChange(event, 'label', contactUsForm)
                    }
                    required={true}
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id={'lastName'}
                    name={'lastName'}
                    placeholder={'Doe'}
                    label={'Last Name'}
                    value={'lastName'}
                    formObject={contactUsForm}
                    type={'text'}
                    required={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <TextField
                    id={'email'}
                    name={'email'}
                    value={'email'}
                    placeholder={'johndoe@gmail.com'}
                    label={'Email'}
                    type={'email'}
                    required={true}
                    formObject={contactUsForm}
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id={'phoneNumber'}
                    name={'phoneNumber'}
                    value={'phoneNumber'}
                    placeholder={'+ 1 819 555 5555'}
                    label={'Phone Number'}
                    type={'tel'}
                    formObject={contactUsForm}
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
                id={'aboutUs'}
                name={'aboutUs'}
                label={'How did you hear about us'}
                type={'text'}
                value={contactUsForm?.aboutUs}
                formObject={contactUsForm}
                required={true}
              />
              <TextArea
                name={'learn'}
                id={'learn'}
                label={'Anything specific you are looking to learn?'}
                rows={6}
                formObject={contactUsForm}
                value={contactUsForm?.learn}
              />
              <Button onClick={() => handleSubmit}>Send Message</Button>
            </form>
          </Container>
        </div>
      </Zoom>
    </>
  )
}

export default ContactUs
