import React, { useState } from "react";
import AuthImg from "../../../Assets/Login_img.png";
import google from "../../../Assets/getfromgoogle.png";
import microsoft from "../../../Assets/getfrommicrosoft.png";
import instagram_title from "../../../Assets/instagram__title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import '../Auth.scss'
import { Link } from "react-router-dom";
const SignUp = () => {
    const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [fullname, setFullname] = useState(false)
  const [user, setUser] = useState(false)
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(
    "Mobile Number or Email"
  );
  const [userplaceholder, setUserPlaceholder] = useState("Username")
  const [fullnamePlaceholder, setFullnamePlaceholder] = useState("Fullname")
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const handleUsername = (e) => {
    if (e.target.value == "") {
      setUsername(false);
      setTimeout(() => {
        setUsernamePlaceholder("Mobile Number or Email");
      }, 200);
    } else {
      setUsername(true);
      setUsernamePlaceholder("");
    }
  };
  const handleFullname = (e) => {
    if (e.target.value == "") {
      setFullname(false);
      setTimeout(() => {
        setFullnamePlaceholder("Fullname");
      }, 200);
    } else {
      setFullname(true);
      setFullnamePlaceholder("");
    }
  };
  const handleUser = (e) => {
    if (e.target.value == "") {
      setUser(false);
      setTimeout(() => {
        setUserPlaceholder("Username");
      }, 200);
    } else {
      setUser(true);
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
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="signup__register">
          <div className="auth__login">
            <div className="signup__login-title">
              <img src={instagram_title} alt="instagram" />
            </div>
            <h4 className="signup__subtitle">Sign up to see photos and videos from your friends.</h4>
            <button className="auth__facebook signup__facebook auth__btn">
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522u7imggx9k2fsthe5s17ay5er1mwo3ogiyg0wty8p2ow1tslrun%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2397e705-0cac-4551-8e79-a521b85bc21d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522u7imggx9k2fsthe5s17ay5er1mwo3ogiyg0wty8p2ow1tslrun%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0">
                <h5 className="auth__facebook-text signup__facebook-text">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="facebook"
                  />
                  Log in with Facebook
                </h5>
              </a>
            </button>
            <div className="auth__line">
              <div className="auth__first-line"></div>
              <h5 className="auth__line-title">OR</h5>
              <div className="auth__first-line"></div>
            </div>
            <form className="auth__form">
              <input
                className={`auth__input ${
                  username == true ? "auth__phone" : ""
                }`}
                type="text"
                onKeyUp={handleUsername}
                placeholder={usernamePlaceholder}
              />
              <span
                className={`auth__username ${
                  username == true ? "auth__focus" : ""
                }`}
              >
                Mobile Number or Email
              </span>
              <input type="text" className={`auth__input ${fullname == true? "signup__fullname2" : ""}`} onKeyUp={handleFullname} placeholder={fullnamePlaceholder}/>
              <span className={`signup__fullname ${fullname == true? "signup__focus4" : ""}`} >Fullname</span>
              <input type="text" className={`auth__input ${user == true ? "signup__username2" : ""}`} onKeyUp={handleUser} placeholder={userplaceholder}/>
              <span className={`signup__username ${user == true ? "signup__focus3" : ""}`}>Username</span>
              <input
                className={`auth__input ${
                  password == true ? "auth__phone" : ""
                }`}
                type={passwordType == false ? "password" : "text"}
                onKeyUp={handlePassword}
                placeholder={passwordPlaceholder}
              />
              <span
                className={`signup__password ${
                  password == true ? "signup__focus2" : ""
                }`}
              >
                Password
              </span>
              <span
                className={`signup__show ${password == true ? "signup__show-block" : ""}`}
                onClick={() => setPasswordType((prev) => !prev)}
              >
                {passwordType == false ? "Show" : "Hide"}
              </span>
           <p className="signup__desc">
           People who use our service may have uploaded your contact information to Instagram. Learn More
           </p>
           <p className="signup__desc">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
            
              <button className="auth__btn">Sign Up</button>
            </form>
          </div>
          <div className="auth__signUp">
            <p className="auth__signUp-text">Have an account?</p>
            <Link className="auth__signUp-title"  to="/">Log in</Link>
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
  )
}

export default SignUp
