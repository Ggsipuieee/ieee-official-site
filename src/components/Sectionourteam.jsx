import React from "react";
import Heading from "../small compo/Heading";
import Card from "./card";
function Sectionourteam() {
  return (
    <div class="ourteam">
      <Heading text="Our Team" class="aboutourteam" />
      <div>
        <div className="teacher-card">
          <Card
            src="../images/ashish.jpeg"
            text="Ashish Payal"
            content="He is an excellent academician, holding a PhD as well as MTech in Computer Science along with MBA in HR and is currently serving as an Assistant Professor in USICT. He has over a decade of teaching experience with expertise in Computer Networks, supplemented by a myriad of research papers. He has mentored and guided hundreds of students and has been a very active part of IEEE USICT as our Branch Counselor."
          />
          <Card
            src="./images/kamaldeep.jpg"
            text="Kamaldeep Kaur"
            content="has a PhD and MTech in CSE and expertise in Computer Architecture, Microprocessors and Digital Electronics. She is currently an Assistant Professor in USICT. She has always been vocal in support of Women in Engineering and Technical Fields and is always open to assist and help students who approach her for guidance. She presides over our WIE subchapter as the WIE Branch Counselor for USICT."
          />
        </div>
        <Heading text="Our Executive Comittee" class="aboutourteam" />
        <div className="student-card">
          <Card
            src="./images/Aryavir.jpeg"
            text="Aryavir Malik"
            content="Chairperson"
          />
          <Card
            src="./images/Atul.jpg"
            text="Atul Kumar Kanojia"
            content="General Secretary"
          />
          <Card
            src="./images/Binisha.jpg"
            text="Binisha Pant"
            content="WIE Chairperson"
          />
        </div>
        <div className="student-card">
          <Card src="./images/Nikhil.jpg" text="Nikhil Jain" content="Treasurer" />
          <Card
            src="./images/Tanya.jpg"
            text="Tanya Tanwer"
            content="WIE Vice Chairperson"
          />
          <Card
            src="./images/Milind.jpg"
            text="Milind Kumar"
            content="Vice Chairperson"
          />
        </div>
        <Heading text="Branch Mentors" class="aboutourteam" />
        <div className="student-card">
          <Card
            src="./images/himanshu.jpeg"
            text="Himanshu Shishodiya"
            content="Branch Mentor"
          />
          <Card
            src="./images/aadya-did-new.jpg"
            text="Aadya Babbar"
            content="Branch Mentor"
          />
          <Card
            src="./images/devansh.jpg"
            text="Devansh Oberoi"
            content="Branch Mentor"
          />
        </div>
        <Heading text="Our Technical Team" class="aboutourteam" />
        <div className="teacher-card">
          <Card
            src="./images/Vishal.jpg"
            text="Vishal Verma"
            content="Technical Lead"
          />
          <Card
            src="./images/Harshil.jpg"
            text="Harshil Bansal"
            content="Technical Lead"
          />
        </div>
      </div>
    </div>
  );
}

export default Sectionourteam;
