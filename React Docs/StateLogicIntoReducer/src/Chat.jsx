import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat-box">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "EDITED_MESSAGE",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        style={{ marginTop: 10 }}
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: "SENT_MESSAGE",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
