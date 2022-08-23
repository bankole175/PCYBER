import { services as serviceData } from '../../content/services'
import styles from './service.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const service = () => {
  return (
    <Container id={'services'}>
      <Row className="justify-content-between mt-5">
        {serviceData.map((service) => (
          <Col md={3} key={service.id} className={styles.service}>
            <div className={styles.icon}>
              <Image src={service.img} width={50} height={50} alt="icon" />
            </div>
            <p className="fw-semibold">{service.title}</p>
            <p className="text-dirty-white">{service.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default service
