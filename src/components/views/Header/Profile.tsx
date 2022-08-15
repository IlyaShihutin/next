import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile_messenger">
        <div className="profile_messenger__icon"></div>
      </div>
      <div className="profile_notifications">
        <div className="profile_notifications__icon">
          <div className="circle"></div>
        </div>
      </div>
      <div className="profile_avatar">
        <div className="profile_avatar__img"></div>
        <div className="profile_avatar__arrow"></div>
      </div>
    </div>
  );
};

export default Profile;
