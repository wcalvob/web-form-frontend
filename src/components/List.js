import React from "react";

const List = ({ users }) => {
  return (
    <div className="">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
