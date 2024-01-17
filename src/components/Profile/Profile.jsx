import React from "react";
import ProfileImg from "../../Assets/profile_img.jpg";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__img">
          <img src={ProfileImg} alt="profileimg" />
        </div>
        <div className="profile__top-text">
          <div className="profile__firstline">
            <h5 className="profile__username">farkhodo_vich</h5>
            <button className="profile__btn">Edit profile</button>
            <button className="profile__btn">View archive</button>
            <button className="profile__btn">Ad tools</button>
            <FontAwesomeIcon icon={faGear} className="profile__icon" />
          </div>
          <div className="profile__statistics">
            <div>
              <h4>138</h4>
              <p>posts</p>
            </div>
            <div>
              <h4>1376</h4>
              <p>followers</p>
            </div>
            <div>
              <h4>195</h4>
              <p>following</p>
            </div>
          </div>
          <h4 className="profile__fullname">
            Sadriddin<span>&#10084;</span>Ravshanov
          </h4>
          <div className="profile__btn2 profile__btn">
            <FontAwesomeIcon icon={faThreads} className="threads" />
            <p>farkhodo_vich</p>
          </div>
          <p>{`<h1>Hey, never forget yourself!</h1>`}</p>
          <a href="https://instagram.com/edits.by_sr">@edits.by_sr</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
