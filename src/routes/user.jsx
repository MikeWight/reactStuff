import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/";

export default function User() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        console.log('Got in here');
      axios.get(baseURL).then((response) => {
        console.log(response.data.user)
        setUser(response.data.user);
      });
    }, []);

    if (!user) return null;

  
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Name: {user.name}</h2>
      <p>
        Username: {user.username}
      </p>
      <h4>Address</h4>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
      <p>{user.address.geo.lat}</p>
      <p>{user.address.geo.lng}</p>
    </main>
  );
}