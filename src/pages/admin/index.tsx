import { createUser, getUsers } from "@/services/api/admin";
import { useEffect, useState } from "react";

function AdminHome() {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    fetchData();
  }, []);

  const handleCreateAccount = async () => {
    const response = await createUser(username, password);
    console.log(response);
  };

  return (
    <div>
      Admin home page
      {/* Add user */}
      <div className="flex w-fit flex-col gap-2 border border-black">
        <label htmlFor="">
          username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="">
          password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={handleCreateAccount}>Add Account</button>
      </div>
      {/* Users List */}
      <p>User List</p>
      {users && (
        <>
          {users.map((user, index) => (
            <p key={index}>{index}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default AdminHome;
