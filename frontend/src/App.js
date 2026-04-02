import React, { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/message")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot Deployment</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;