"use client";

import { useState, useEffect } from "react";

type Users = {
  id: number;
  name: string;
  email: string;
};

export default function ClientUsersPage() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      //   fetch("https://jsonplaceholder.typicode.com/users")
      //     .then((response) => response.json())
      //     .then((data) => setUsers(data)).catch((error) => console.error("Error fetching users:", error));
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Client Users Page</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
