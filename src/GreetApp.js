import { useState } from "react";
import './App.css'; // Import CSS for styling

export default function GreetApp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name.trim()) {
      setMessage("Please enter a name.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error connecting to the server. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <button onClick={getGreeting} className="btn">
        Get Greeting
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}