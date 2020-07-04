import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="content-container">
      <Grid container spacing={4}>
        <Grid item xs={6} sm={4} md={3} className="fade-right">
          <img src={ProfilePic} className="profile-pic"></img>
        </Grid>
        <Grid item xs className="fade-left">
          <h1 class="font-weight-light">About</h1>
          <p>
            I am a problem solver that loves to program. This has lead to a deep
            interest in coding, robotics and algorithms.
          </p>
        </Grid>
      </Grid>
      <br></br>
      <h2>Background</h2>
      <p>
        I was born in New Zealand and enjoy travelling. I also enjoy badminton,
        skiing, art and piano. I am now studying a conjoint of Computer Systems
        Engineering and Science, majoring in Logic and Computation at the
        University of Auckland.
      </p>
      <h2>Education</h2>
      <p>
        I passed NCEA Level 3 with excellence endorsement. I attained 72
        excellence credits, achieving a rank score of 312/320.
      </p>
      <p>
        I am now in my fourth year of university, taking a conjoint in Computer
        Systems Engineering and Science, majoring in Logic and Computation. I
        expect to finish this degree in 2021.
      </p>
    </div>
  );
}

export default About;
