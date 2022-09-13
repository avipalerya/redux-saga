import React from "react";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map((val) => {
        return (
          <>
            <table>
              <tr>
                <td>
                  <p>{val.first_name}</p>
                </td>
                <td>
                  <p>{val.id}</p>
                </td>
              </tr>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default UsersList;
