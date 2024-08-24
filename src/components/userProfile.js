import React from "react";
import LinkButton from "./LinkButton";

const UserProfile = () => {
  return (
    <div className="flex items-center ms-6">
      <div className="block lg:inline-block lg:px-4 px-2 py-2">
        <LinkButton href="/login">Login</LinkButton>
      </div>
      <div className="block lg:inline-block lg:px-4 px-2 py-2">
        <LinkButton variant="outlined" href="/signup">
          Sign Up
        </LinkButton>
      </div>
    </div>
  );
};

export default UserProfile;
