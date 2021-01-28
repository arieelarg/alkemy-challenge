import { useFetch } from "./../../customHooks/useHTTP";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const [balance, fetching, error] = useFetch("panel/balance");
  console.log(balance);
  return (
    <>
      <Row>
        <h3>Panel</h3>
      </Row>
      <Row>
        <Col style={{ border: "1px solid red" }}>
          Ingresos: {balance[0]?.total}
        </Col>
        <Col style={{ border: "1px solid blue" }}>
          Egresos: {balance[1]?.total}
        </Col>
      </Row>
    </>
  );
};

export default Home;
