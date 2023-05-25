import React, { useEffect, useState } from "react";
import { manageUserFunc } from "../../Firebase/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faFlagCheckered, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const UserTable = () => {
  
  const [trueUsers, setTrueUsers] = useState([]);
  const [reloadComponent, setReloadComponent] = useState(false);

  const handleStatus = (status,id) => {
    
    const data = {
        action: "CHANGE_STATUS",
        status: {
            id: id,
            status: status
        }
    };

    manageUserFunc(data)

    setReloadComponent(!reloadComponent)

  }

  useEffect(() => {
    
    const data = {
        action: "GET_ALL_USERS",
    };

    manageUserFunc(data)
    .then((res) => {
        setTrueUsers(res.data.customUsers);
    })
  }, []);

  useEffect(() => {
    
    const data = {
        action: "GET_ALL_USERS",
    };

    manageUserFunc(data)
    .then((res) => {
        setTrueUsers(res.data.customUsers);
    })
  }, [reloadComponent]);

  const users = [
    {
      id: 1,
      name: "John Doe",
      firstName: "John",
      role: "Admin",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      firstName: "Jane",
      role: "User",
      phone: "987-654-3210",
    },
    // Add more users here...
  ];

  return (
    <>

      {/* <h1> { JSON.stringify(trueUsers) } </h1> */}

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {trueUsers.map((user) => (
            <tr key={user.userId}>
              <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.firstname}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.phone}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{(user.status) ? "authorised" : "disable" }</td>
              <td className="px-6 py-4 whitespace-no-wrap flex justify-center items-center">
                <button className={ (user.status) ? "text-green-300" : "text-red-500" } onClick={() => {
                    handleStatus(!user.status, user.id);                    
                }} >
                    <FontAwesomeIcon icon={faFlag} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
