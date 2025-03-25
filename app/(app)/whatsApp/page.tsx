"use client";

import axios from "axios";

export default function WhatsAppPage() {
  const handleButtonClick = async () => {
    try {
      const response = await axios.post("/api/whatsapp/whatsApp.ts");
      console.log(response.data.message);
    } catch (error) {
      console.error("Error initializing WhatsApp client:", error);
    }
  };

  return (
    <div>
      <h1>WhatsApp</h1>
      <button onClick={handleButtonClick}>Start!</button>
    </div>
  );
}
