import React, { useEffect } from "react";

const UseRow = ({ myOrder, index }) => {
  const { email, name, product, _id } = myOrder;

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("deleted successful");
        console.log(data);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td> {name}</td>
      <td>{email}</td>
      <td>{product}</td>
      <td>
        <button onClick={() => deleteHandler(_id)}>Cancel</button>
      </td>
      <td>
        <button>Payment</button>
      </td>
    </tr>
  );
};

export default UseRow;
