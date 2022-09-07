import { Col, Container } from 'react-bootstrap'
import { SelectInput, TextArea, TextField } from '../../Input'
import styles from './demo.module.css'
import Image from 'next/image'
import Button from '../Button'
import { useRouter } from 'next/router'
import { FormObjectT } from '../../utils/type'
import React, { useState } from 'react'
import emailjs, { init } from '@emailjs/browser'

const Demo = () => {
  init('EUEkJoJpRKpf6Rq1x')
  const options = [
    { label: 'API', value: 'api' },
    { label: 'Web Application', value: 'webApplication' },
    { label: ' API & Web Application', value: 'apiWebApplication' },
  ]

  const demoForm: FormObjectT = {
    learn: undefined,
    protecting: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    aboutUs: undefined,
  }

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const goTo = (url: string) => {
    router.push(url)
  }

  const clearDemoForm = () => {
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
      from_name: `${demoForm.firstName} ${demoForm.lastName}`,
    }

    templateParams = { ...templateParams, ...demoForm }
    emailjs.send('service_4u0y851', 'template_6rg12c9', templateParams).then(
      () => {
        clearDemoForm()
        setIsLoading(false)
      },
      (error) => {
        setIsLoading(false)
        console.log(error.text)
      },
    )
  }

  return (
    <div className="d-flex">
      <Col className={`${styles.bgDark} d-none d-md-block`}>
        <span
          onClick={() => goTo('/')}
          className={`d-inline-flex align-items-center cursor ${styles.logo}`}
        >
          <Image src="/icons/logo.svg" alt="" width={80} height={80} />
          <span className="text-smcyber-primary ms-n2">PLATFORMCYBER</span>
        </span>
      </Col>
      <Col className="bg-white">
        <Container className={styles.container}>
          <h6 className="fw-semibold mb-4">
            <span className="d-flex align-items-center">
              <Image
                src={'/icons/forward-arrow.svg'}
                width={20}
                height={20}
                alt={'arrow icon'}
              />
              <span className="ms-2">
                Fill out the form below to request your live demo
              </span>
            </span>
          </h6>
          <form>
            <TextField
              id={'firstName'}
              name={'firstName'}
              value={'firstName'}
              placeholder={'John'}
              label={'First Name'}
              type={'text'}
              formObject={demoForm}
              required={true}
            />
            <TextField
              id={'lastName'}
              name={'lastName'}
              placeholder={'Doe'}
              label={'Last Name'}
              value={'lastName'}
              formObject={demoForm}
              type={'text'}
              required={true}
            />
            <TextField
              id={'email'}
              name={'email'}
              value={'email'}
              placeholder={'johndoe@gmail.com'}
              label={'Work Email'}
              type={'email'}
              required={true}
              formObject={demoForm}
            />
            <SelectInput
              id={'protecting'}
              value={'protecting'}
              label={'What are you protecting?'}
              required={true}
              options={options}
              formObject={demoForm}
            />
            <TextField
              id={'aboutUs'}
              value={'aboutUs'}
              name={'aboutUs'}
              label={'How did you hear about us'}
              type={'text'}
              required={true}
              formObject={demoForm}
            />
            <TextArea
              name={'learn'}
              id={'learn'}
              label={'Anything specific you are looking to learn?'}
              rows={3}
              formObject={demoForm}
              value={'learn'}
            />
            <Button isLoading={isLoading} onClick={(event) => submit(event)}>
              Request a Demo Now
            </Button>
          </form>
        </Container>
      </Col>
    </div>
  )
}

export default Demo
