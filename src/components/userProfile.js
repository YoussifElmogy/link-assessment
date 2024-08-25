import React from "react";
import LinkButton from "./shared/LinkButton";

const UserProfile = () => {
  return (
    <div className="flex items-center lg:ms-6 ms-0">
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
