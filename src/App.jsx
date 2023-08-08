import QuoteBox from "./components/quoteBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <QuoteBox />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
