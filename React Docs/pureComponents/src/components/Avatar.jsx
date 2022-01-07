export const Avatar = ({ person }) => {
  const { name, imageId } = person;
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${imageId}s.jpeg`}
      alt={name}
    />
  );
};
