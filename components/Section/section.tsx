import { Col, Container, Row } from 'react-bootstrap'
import styles from './section.module.css'
import { Zoom } from 'react-awesome-reveal'

type Props = {
  img: string
  title: string
  bg: string
  listItems: Array<string>
}

const Section = (props: Props) => {
  const { img, title, listItems, bg } = props
  return (
    <Container className="pt-section">
      <Zoom>
        <Row className={`justify-content-between align-items-center ${bg}`}>
          <Col lg={6}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                className={`${styles.img} img-fluid`}
                alt={'social security'}
              />
            </div>
          </Col>
          <Col lg={6}>
            <p className={`mb-5 ${styles.title}`}>{title}</p>
            <ul className="">
              {listItems.map((item, index) => (
                <li key={index} className={styles.li}>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Zoom>
    </Container>
  )
}

export default Section
