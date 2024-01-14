import React, { useState } from "react";
import AuthImg from "../../Assets/Login_img.png";
import google from "../../Assets/getfromgoogle.png";
import microsoft from "../../Assets/getfrommicrosoft.png";
import "./Auth.scss";
import instagram_title from "../../Assets/instagram__title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
const Auth = () => {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [userPlaceholder, setUserPlaceholder] = useState(
    "Phone number, username or email"
  );
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const handleUsername = (e) => {
    if (e.target.value == "") {
      setUsername(false);
      setTimeout(() => {
        setUserPlaceholder("Phone number, username or email");
      }, 200);
    } else {
      setUsername(true);
      setUserPlaceholder("");
    }
  };
  const handlePassword = (e) => {
    if (e.target.value == "") {
      setPassword(false);
      setTimeout(() => {
        setPasswordPlaceholder("Password");
      }, 200);
    } else {
      setPassword(true);
      setPasswordPlaceholder("");
    }
  };
  console.log(username);
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__img">
          <img src={AuthImg} alt="Auth" />
        </div>
        <div className="auth__register">
          <div className="auth__login">
            <div className="auth__login-title">
              <img src={instagram_title} alt="instagram" />
            </div>
            <form className="auth__form">
              <input
                className={`auth__input ${
                  username == true ? "auth__phone" : ""
                }`}
                type="text"
                onKeyDown={handleUsername}
                placeholder={userPlaceholder}
              />
              <span
                className={`auth__username ${
                  username == true ? "auth__focus" : ""
                }`}
              >
                Phone number, username or email
              </span>
              <input
                className={`auth__input ${
                  password == true ? "auth__phone" : ""
                }`}
                type={passwordType == false ? "password" : "text"}
                onKeyDown={handlePassword}
                placeholder={passwordPlaceholder}
              />
              <span
                className={`auth__password ${
                  password == true ? "auth__focus2" : ""
                }`}
              >
                Password
              </span>
              <span
                className="show"
                onClick={() => setPasswordType((prev) => !prev)}
              >
                {passwordType == false ? "Show" : "Hide"}
              </span>
              <button className="auth__btn">Log in</button>
            </form>
            <div className="auth__line">
              <div className="auth__first-line"></div>
              <h5 className="auth__line-title">OR</h5>
              <div className="auth__first-line"></div>
            </div>
            <div className="auth__facebook">
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522u7imggx9k2fsthe5s17ay5er1mwo3ogiyg0wty8p2ow1tslrun%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2397e705-0cac-4551-8e79-a521b85bc21d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522u7imggx9k2fsthe5s17ay5er1mwo3ogiyg0wty8p2ow1tslrun%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0">
                <h5 className="auth__facebook-text">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="facebook"
                  />
                  Log in with Facebook
                </h5>
              </a>
            </div>
            <p className="forgot__password">Forgot password?</p>
          </div>
          <div className="auth__signUp">
            <p className="auth__signUp-text">Don't have an account?</p>
            <h5 className="auth__signUp-title">Sign up</h5>
          </div>
          <div className="auth__social">
            <p className="auth__social-title">Get the app</p>
            <div className="auth__social-image">
              <img className="google__play" src={google} alt="social media" />
            </div>
            <div className="auth__social-image">
              <img className="microsoft" src={microsoft} alt="social media" />
            </div>
          </div>
        </div>
      </div>
      <div className="auth__footer">
        <p>
          Meta About Blog Jobs Help API Privacy Terms Locations Instagram Lite
          Threads Contact Uploading & Non-Users Meta Verified 
          English▼  ©2024 Instagram from Meta
        </p>
      </div>
    </div>
  );
};

export default Auth;
