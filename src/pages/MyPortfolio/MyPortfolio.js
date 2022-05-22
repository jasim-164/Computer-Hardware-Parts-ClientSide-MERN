import React from "react";
import "./MyPortfolio.css"
import profile from "../../assets/photos/profile-pic.png"
const MyPortfolio = () => {
  return (
    <div className="p-5">
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img src={profile} alt="aboutme" />
                </div>
              </div>

              <h2>
                MD. Jasim Uddin
                <br />
                (Kajol)
              </h2>
              <h3>Backend Developer</h3>
            </div>

            <ul class="icons">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>

        <div class="about-right">
          <h1>
            hi<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          <div class="about-btns">
            <button type="button" class="btn btn-pink">
              resume
            </button>
            <button type="button" class="btn btn-white">
              projects
            </button>
          </div>

          <div class="about-para">
            <p>
              {" "}
              hey, I'm Jasim Uddin. I'm studying at RUET. I have a CSE
              background. My future plan is, want to be GOOGLE Software
              Engineer. I really work hard for it. I love solving problems. I am
              a competitive programmer. Regularly I participate in contest.
              Mainly I love solving codeforces problems. Around 1400-1600 range
              difficultise problems that I can solve. I really passionate about
              a backend developing. I am really love to learn new things. In
              this course I have learned many things that I didn't know about.
              Now I have so strength that I can develop any type of website.
            </p>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
