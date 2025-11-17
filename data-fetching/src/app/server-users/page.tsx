interface User {
  id: number;
  name: string;
  email: string;
}

export default async function ServerUsersPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Server Users Page</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
