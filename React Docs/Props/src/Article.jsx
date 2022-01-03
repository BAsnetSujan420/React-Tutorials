import Card from "./Card";

export default function Article() {
  return (
    <div className="article">
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/25wA27j.jpeg"
          alt="Bill Gates"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About">
        <p>
          Bill Gates is a cool person who is contributing on health, agriculture
          and economics sector to make world a better place. He is a climate
          activist, author and founder of Microsoft , along with his late
          childhood friend Paul Allen. He is also founder of Gates Foundation
          which is a nonprofit fighting poverty, disease, and inequity around
          the world. He writes annual letter to reflect impactful work.
        </p>
      </Card>
    </div>
  );
}
