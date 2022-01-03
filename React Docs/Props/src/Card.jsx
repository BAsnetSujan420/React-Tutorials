const Card = ({ children, title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
