import { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour, je constate que vous ne vous en sortez pas bien en logique." },
    { sender: "user", text: "Pouvez-vous me générer une feuille de route adaptée ?" },
    { sender: "user", text: "Et si possible une feuille de route pas très longue ?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f0f0f0", height: "100vh", padding: "1rem" }}>
      <div style={{ backgroundColor: "white", width: "80%", padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", height: "100px" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", color:'black', fontFamily:'Montserrat' }}>Historique</h2>
      </div>

      <div style={{ width: "75%", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ display: "flex", justifyContent: msg.sender === "bot" ? "flex-start" : "flex-end" ,position:'relative', bottom:'-150px', }}>
            {msg.sender === "bot" && <FaRobot style={{ fontSize: "1.5rem", color: "#2563eb", marginRight: "0.5rem" }} />}
            <div
              style={{
                padding: "10px 15px",
                borderRadius: "10px",
                maxWidth: "60%",
                fontSize: "14px",
                lineHeight: "1.4",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                backgroundColor: msg.sender === "bot" ? "#2563eb" : "white",
                color: msg.sender === "bot" ? "white" : "black",
                border: msg.sender === "bot" ? "none" : "1px solid #d1d5db",
                fontFamily:'Montserrat'
              }}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && <FaUser style={{ fontSize: "1.5rem", color: "#6b7280", marginLeft: "0.5rem" }} />}
          </div>
        ))}
      </div>

      <div style={{ position:'relative', bottom:'-150px',  display: "flex", alignItems: "center", width: "75%", marginTop: "1rem", backgroundColor: "#B6D3FF", padding: "0.5rem", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)"}}>
        <input
          type="text"
          placeholder="Message ..."
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} style={{ color: "#2563eb", fontSize: "1.5rem", padding: "0.5rem", border: "none", background: "none", cursor: "pointer" }}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
