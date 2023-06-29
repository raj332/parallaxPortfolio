import React from 'react'
import "./contact.scss"
import instaIcon from "../../img/icons/icons8-instagram-240.png"
import faceboonIcon from "../../img/icons/icons8-facebook-240.png"
import linkedinIcon from "../../img/icons/icons8-linkedin-250.png"
import whatsappIcon from "../../img/icons/icons8-whatsapp-240.png"
import githubIcon from "../../img/icons/icons8-github-240.png"
const Contact = () => {
  return (
    <div>
    <center class="titles" data-aos="fade-up">Get In Touch</center>

    <div id="contactcard">


    <div id="mycontact" data-aos="fade-right">

        <div class="contact-text"> Fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</div>
        <br/><span class="text-2">EMAIL</span>
        <br/> <span class="text-1">cpr19846@gmail.com</span>
        <br/><br/> <span class="text-2">PHONE</span>
        <br/> <span class="text-1">+91-9724140616</span>
        <br/><br/> <span class="text-2">ADDRESS</span>
        <br/> <span class="text-1">JP DAWER INSTITUTE ,VNSGU, SURAT</span>
        <div id="contact-icons">
            <a href="http://instagram.com/_u/3.rajpatel/" target="_blank" id="instagram">
                <img src={instaIcon}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100015717935381" target="_blank" id="facebook">
                <img src={faceboonIcon}/>
            </a>

            <a href="https://www.linkedin.com/in/raj-patel-06560b1a4/" target="_blank" id="linkedin">
                <img src={linkedinIcon}/>
            </a>

            <a href="https://wa.me/9724140616" target="_blank" id="whatsapp">
                <img src={whatsappIcon}/>
            </a>
            <a href="https://github.com/raj332" target="_blank" id="github">
                <img src={githubIcon} />
            </a>
        </div>
    </div>
    <form id="contactform" action="https://formsubmit.co/cpr19846@gmail.com" method="POST" >

        <input type="text" id="name" placeholder="* Your Name" name="Name" required/><br/>
        <input type="email" id="email" placeholder="* Your Email-Id" name="Email" required/><br/>
        <textarea id="message" placeholder="* Write Message Or Review" name="Message" rows="10" required ></textarea><br/>
        <input value="Send Message" id="sendbtn" name="Submitbtn" type="submit" />


    </form>


</div>
<div id="copyright"> This site is made with
        <font color=" red ">❤</font> by
        <font color="red ">Raj Patel</font> in India.
    </div>
    </div>
  )
}

export default Contact