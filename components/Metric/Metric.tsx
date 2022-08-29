import { Col, Container, Row } from 'react-bootstrap'
import { statistics } from '../../content/statistics'
import styles from './metric.module.css'
import Image from 'next/image'
import { Zoom } from 'react-awesome-reveal'

const Metric = () => {
  return (
    <Container>
      <Zoom>
        <Row className={styles.metric}>
          {statistics.map((statistic) => (
            <Col
              lg={3}
              key={statistic.id}
              className="d-flex align-content-center"
            >
              <div className={`${styles.icon} ${styles[statistic.id]}`}>
                <Image
                  src={statistic.img}
                  width={50}
                  height={50}
                  alt="stats icon"
                />
              </div>
              <div>
                <p className={styles.metricValue}>{statistic.value}</p>
                <p>{statistic.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Zoom>
    </Container>
  )
}

export default Metric
