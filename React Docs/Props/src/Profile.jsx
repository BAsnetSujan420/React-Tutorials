const Profile = ({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${imageId}s.jpg`}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
};

export default Profile;
