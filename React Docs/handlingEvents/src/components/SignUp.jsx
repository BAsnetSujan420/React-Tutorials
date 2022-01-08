export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input className="inputField" />
      <button>Send</button>
    </form>
  );
}
