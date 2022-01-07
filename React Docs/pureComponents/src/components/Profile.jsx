import React from "react";
import { Header } from "./Header";
import { Avatar } from "./Avatar";
import ProfilePanel from "./ProfilePanel";

const Profile = ({ person }) => {
  return (
    <ProfilePanel>
      <Header person={person} />
      <Avatar person={person} />
    </ProfilePanel>
  );
};

export default Profile;
