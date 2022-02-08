export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ marginBlock: 10 }}>
            <button
              onClick={() => {
                dispatch({
                  type: "CHANGED_SELECTION",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
