import Transaction from "./Transaction";
import { Table, Row } from "react-bootstrap";
import { useFetch } from "./../../customHooks/useHTTP";

const Transactions = () => {
  const [transactions, fetching, error] = useFetch("transactions");
  return (
    <>
      <Row>
        <h3>Transactions</h3>
        </Row>
        
        {fetching ? (
          ""
        ) : (
          <Row>
          <Table striped bordered hover className="p-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Create</th>
                <th>Type</th>
                <th>Category</th>
                <th>concept</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <Transaction key={transaction.id} {...transaction} />
              ))}
            </tbody>
          </Table>
          </Row>
        )}
        </>
  );
};

export default Transactions;
