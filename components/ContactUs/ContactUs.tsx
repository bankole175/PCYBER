import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { SelectInput, TextArea, TextField } from '../../Input'
import Button from '../Button'
import styles from './contactUs.module.css'
import { Zoom } from 'react-awesome-reveal'
import emailjs, { init } from '@emailjs/browser'
import React, { useState } from 'react'
import { FormObjectT } from '../../utils/type'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'

const ContactUs = () => {
  init('EUEkJoJpRKpf6Rq1x')
  const router = useRouter()

  const options = [
    { label: 'Protecting my social media accounts', value: 'socialMedia' },
    { label: 'Protecting my website', value: 'website' },
    {
      label: 'Protecting both social media accounts and my website',
      value: 'both',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ]

  const contactUsForm: FormObjectT = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phoneNumber: undefined,
    interest: undefined,
    other: undefined,
    aboutUs: undefined,
    message: undefined,
  }

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string | undefined>()

  const clearContactUsForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = ''),
    )
    Array.from(document.querySelectorAll('textarea')).forEach(
      (textarea) => (textarea.value = ''),
    )
  }

  const submit = (e: React.MouseEvent) => {
    setIsLoading(true)
    e.preventDefault()
    let templateParams = {
      from_name: `${contactUsForm.firstName} ${contactUsForm.lastName}`,
    }

    templateParams = { ...templateParams, ...contactUsForm }
    emailjs.send('service_4u0y851', 'template_dmd3spu', templateParams).then(
      () => {
        clearContactUsForm()
        toast.success('Form submitted successfully', {
          position: 'top-right',
        })
        setIsLoading(false)
        router.push('/')
      },
      (error) => {
        setIsLoading(false)
        toast.error('Form submission failed', {
          position: 'top-right',
        })
        console.log(error.text)
      },
    )
  }

  return (
    <>
      <ToastContainer />
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
                id={'interest'}
                label={'I am interested in'}
                required={true}
                options={options}
                formObject={contactUsForm}
              />
              {selectedValue === 'Other' && (
                <TextField
                  id={'other'}
                  name={'other'}
                  label={'Tell us what it is'}
                  type={'text'}
                  value={'other'}
                  formObject={contactUsForm}
                  required={false}
                />
              )}
              <TextField
                id={'aboutUs'}
                name={'aboutUs'}
                label={'How did you hear about us'}
                type={'text'}
                value={'aboutUs'}
                formObject={contactUsForm}
                required={false}
              />
              <TextArea
                name={'message'}
                id={'message'}
                label={'Message'}
                rows={6}
                formObject={contactUsForm}
                value={'message'}
              />
              <Button isLoading={isLoading} onClick={(event) => submit(event)}>
                Send Message
              </Button>
            </form>
          </Container>
        </div>
      </Zoom>
    </>
  )
}

export default ContactUs
