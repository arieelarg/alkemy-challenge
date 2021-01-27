const Transaction = ({ id, concept, amount, tsCreate, Type, Category }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{tsCreate}</td>
        <td>{Type}</td>
        <td>{Category}</td>
        <td>{concept}</td>
        <td>{amount}</td>
      </tr>
    </>
  );
};

export default Transaction;
