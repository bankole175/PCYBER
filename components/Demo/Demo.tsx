import { Col, Container } from 'react-bootstrap'
import { SelectInput, TextArea, TextField } from '../../Input'
import styles from './demo.module.css'
import Image from 'next/image'
import Button from '../Button'
import { useRouter } from 'next/router'

const Demo = () => {
  const options = [
    { label: 'API', value: 'api' },
    { label: 'Web Application', value: 'webApplication' },
    { label: ' API & Web Application', value: 'apiWebApplication' },
  ]

  const router = useRouter()
  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <div className="d-flex">
      <Col className={styles.bgDark}>
        <span
          onClick={() => goTo('/')}
          className={`d-inline-flex align-items-center cursor ${styles.logo}`}
        >
          <Image src="/icons/logo.svg" alt="" width={80} height={80} />
          <span className="text-smcyber-primary ms-n2">SMCYBER</span>
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
          <form action="">
            <TextField label={'First Name'} type={'text'} required={true} />
            <TextField label={'Last Name'} type={'text'} required={true} />
            <TextField label={'Work Email'} type={'email'} required={true} />
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
              row={3}
            />
            <Button onClick={() => goTo('/request-a-demo')}>
              Request a Demo Now
            </Button>
          </form>
        </Container>
      </Col>
    </div>
  )
}

export default Demo
