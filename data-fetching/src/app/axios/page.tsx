import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function AxiosPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const users: User[] = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);

  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Axios Page</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
