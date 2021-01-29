import { Form, Row, Col, Button } from "react-bootstrap";
import { useFetch } from "../../../customHooks/useHTTP";
import { types } from "../../../constants";

const Create = () => {
  const [categories, fetching] = useFetch("categories");
  return (
    <>
      <Row className={"justify-content-center"}>
        <h3>Create Transaction</h3>
      </Row>
      <br />
      <Row className={"justify-content-center"}>
        <Form>
          <Form.Row>
            <Col>
              <Form.Group controlId="concept">
                <Form.Label>Concept</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="99.99" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" defaultValue="0">
                  <option disabled value="0">
                    Type
                  </option>
                  {Object.entries(types).map((t) => (
                    <option key={t[0]} value={t[0]}>
                      {t[1]}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="0">
                  <option disabled value="0">
                    Category
                  </option>
                  {!fetching &&
                    categories.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit" className="btn-block">
            Submit
          </Button>
          <Button variant="secondary" type="submit" className="btn-block">
            Volver
          </Button>
        </Form>
        {/*<th>Type</th>*/}
        {/*<th>Category</th>*/}
      </Row>
    </>
  );
};

export default Create;
