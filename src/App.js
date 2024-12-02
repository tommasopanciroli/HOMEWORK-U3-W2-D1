import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'
import CommentArea from './components/CommentArea'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}

        <Row>
          <Col md={8}>
            <BookList books={fantasy} />
          </Col>
          <Col md={4} className="mt-5">
            <CommentArea />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
