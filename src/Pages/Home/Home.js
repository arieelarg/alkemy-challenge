import { useFetch } from "../../customHooks/useHTTP";
import { Row, Col, Table } from "react-bootstrap";
import Transaction from "../../Components/Transaction";

const Home = () => {
  const [balance, fetching, error] = useFetch("panel/balance");
  const [transactions, fetching2, error2] = useFetch("transactions");
  console.log("transactions: ", transactions);
  console.log("balance: ", balance);
  return (
    <>
      <Row>
        <h3 className={"w-100"}>Panel</h3>
        <Col className={"w-50"}>Income: {balance[0]?.total}</Col>
        <Col className={"w-50"}>Outcome: {balance[1]?.total}</Col>
      </Row>
      <br />
      <Row>
        <h3>Transactions</h3>
        <Table striped bordered hover className="p-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Create</th>
              <th>Type</th>
              <th>Category</th>
              <th>Concept</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {!fetching2 &&
              transactions?.map((transaction) => (
                <Transaction key={transaction.id} {...transaction} />
              ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default Home;
