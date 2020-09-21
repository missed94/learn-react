import React from "react";
import My_posts from "./My_posts/My_posts";
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <div className={classes.banner__wrap}>
        <img
          className={classes.banner}
          src="https://s3.nat-geo.ru/images/2019/6/23/2054642dfdd241c99fc32579ab7e1c61.max-1200x800.jpg"
        />
      </div>
      <My_posts/>
    </div>
  );
};

export default Profile;
