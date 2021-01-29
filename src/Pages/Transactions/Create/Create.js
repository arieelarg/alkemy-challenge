import { Form, Row, Col, Button } from "react-bootstrap";
import { useFetch, usePost } from "../../../customHooks/useHTTP";
import { types } from "../../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  concept: yup.string().required(),
  amount: yup.number().required(),
  idCategory: yup.number().required(),
  idType: yup.number().required(),
});

const Create = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [categories, fetching] = useFetch("categories");
  const [post, response, fPost] = usePost();
  const onSubmit = (data, e) => {
    post("transactions/create", data);
    e.target.reset();
  };
  return (
    <>
      <Row className={"justify-content-center"}>
        <h3>Create Transaction</h3>
      </Row>
      <br />
      <Row className={"justify-content-center"}>
        <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="concept">Concept</Form.Label>
                <Form.Control
                  id="concept"
                  ref={register}
                  name="concept"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="amount">Amount</Form.Label>
                <Form.Control
                  id="amount"
                  ref={register}
                  name="amount"
                  type="text"
                  placeholder="99.99"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="idType">Type</Form.Label>
                <Form.Control
                  id="idType"
                  ref={register}
                  name="idType"
                  as="select"
                  defaultValue="0"
                >
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
              <Form.Group>
                <Form.Label htmlFor="idCategory">Category</Form.Label>
                <Form.Control
                  id="idCategory"
                  ref={register}
                  name="idCategory"
                  as="select"
                  defaultValue="0"
                >
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
          {fPost && <h3>enviando datos</h3>}
          <Button variant="secondary" className="btn-block">
            Volver
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default Create;
