import React from 'react'
import "./profile.scss"
const Profile = () => {
  return (
    <div id="profile">

        <div id="about-box" data-aos="fade-right">
            <div id="titles-1">About Me</div> <br/>
            <span>Passionate IT Student with Good Management and Problem solving Skills. Extremly intrested in Programming ,Financial Books , Trading and Travel. Always learning to improve my skills , fix weaknesses.
                </span><br/>

            <div id="skills">
                <div class="skill-title">
                    HTML && CSS
                    <div class="skill-per">85%</div>
                </div>
                <div class="bar">
                    <div id="htmlline" ></div>
                </div>

                <div class="skill-title">
                    REACT & NODEJS
                    <div class="skill-per">65%</div>
                </div>
                <div class="bar">
                    <div id="jsline" ></div>
                </div>

                <div class="skill-title"> JAVASCRIPT
                    <div class="skill-per">80%</div>
                </div>
                <div class="bar">
                    <div id="phpline"></div>
                </div>


                <div class="skill-title">JAVA
                    <div class="skill-per">60%</div>
                </div>
                <div class="bar">
                    <div id="cppline"></div>
                </div>
            </div>



        </div>


        <div id="pic" data-aos="fade-left">

        </div>
    </div>
  )
}

export default Profile