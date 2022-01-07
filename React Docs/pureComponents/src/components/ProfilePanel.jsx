import React, { useState } from "react";

const ProfilePanel = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="panel">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Collapse" : "Expand"}
      </button>
      {isOpen && children}
    </section>
  );
};

export default ProfilePanel;
