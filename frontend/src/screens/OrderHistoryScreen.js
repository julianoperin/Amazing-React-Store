import React from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

//! React Redux
import { useSelector, useDispatch } from "react-redux";

const OrderHistoryScreen = (props) => {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { orders, loading, error } = orderMineList;
  console.log(orderMineList);
  return (
    <div>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <dbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "No"}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/order/${order._id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </dbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
