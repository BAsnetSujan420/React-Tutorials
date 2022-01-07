export const Header = ({ person }) => (
  <div>
    <h1>
      {person.name} <span class="subheading">{person.age}</span>
    </h1>
    <p>
      Profession: <em>Rock climber</em>
    </p>
    <p>
      Nationality : <em>American</em>
    </p>
  </div>
);
