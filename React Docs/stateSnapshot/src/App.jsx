import { useState } from "react";
import "./App.css";

function App() {
  const [medium, setMedium] = useState("Khalti");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(5000);

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      let sendMoney = confirm(
        `Do you want to send $${amount} to ${receiver} through ${medium} ?`
      );
      if (sendMoney) {
        setTimeout(() => {
          alert(`Success!!! $${amount} deducted from your ${medium} account.`);
        }, 2000);
      }
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Send ($): {amount}</h3>
      <div className="form-control">
        <button
          type="button"
          onClick={() => {
            setAmount((prevAmount) => prevAmount + 5000);
          }}
        >
          +5000
        </button>
      </div>
      <div className="form-control">
        <label htmlFor="receiver">To : </label>
        <input
          placeholder="Receiver Name"
          id="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>
          Transfer Through : &nbsp;
          <select value={medium} onChange={(e) => setMedium(e.target.value)}>
            <option value="Khalti">Khalti</option>
            <option value="eSewa">eSewa</option>
            <option value="Nabil Pay">Nabil Pay</option>
          </select>
        </label>
      </div>
      <div className="form-control">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default App;
