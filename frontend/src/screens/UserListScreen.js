import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../actions/userActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_DETAILS_RESET } from "../constant/userConstants";

import YES from "../assets/checked.png";
import NO from "../assets/cancel.png";

function UserListScreen(props) {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, success } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  useEffect(() => {
    dispatch(listUsers());
    dispatch({ type: USER_DETAILS_RESET });
  }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch(deleteUser(user._id));
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table role="table" className="table__user__list__screen">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">ID</th>
              <th role="columnheader">Name</th>
              <th role="columnheader">Email</th>
              <th role="columnheader">Seller</th>
              <th role="columnheader">Admin</th>
              <th role="columnheader">Edit / Delete</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {users.map((user) => (
              <tr key={user._id}>
                <td role="cell">{user._id}</td>
                <td role="cell">{user.name}</td>
                <td role="cell">{user.email}</td>
                <td role="cell">
                  {user.isSeller ? (
                    <img className="yes__no__option" src={YES} alt="yes" />
                  ) : (
                    <img className="yes__no__option" src={NO} alt="no" />
                  )}
                </td>
                <td role="cell">
                  {user.isAdmin ? (
                    <img className="yes__no__option" src={YES} alt="yes" />
                  ) : (
                    <img className="yes__no__option" src={NO} alt="no" />
                  )}
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    <i className="fas fa-user-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserListScreen;
