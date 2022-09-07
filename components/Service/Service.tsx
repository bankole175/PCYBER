import { services as serviceData } from '../../content/services'
import styles from './service.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { Roll } from 'react-awesome-reveal'

const service = () => {
  return (
    <Container id={'services'} className="mb-section">
      <Row className="justify-content-between mt-5" style={{ gap: 1 }}>
        {serviceData.map((service) => (
          <Col lg={3} key={service.id} className={'mb-4'}>
            <Roll>
              <div className={styles.service}>
                <div className={styles.icon}>
                  <Image src={service.img} width={50} height={50} alt="icon" />
                </div>
                <p className="fw-semibold">{service.title}</p>
                <p className="text-dirty-white">{service.text}</p>
              </div>
            </Roll>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default service
