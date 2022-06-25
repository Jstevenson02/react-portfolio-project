import React from 'react';
import { LinkedIn, Email, GitHub } from '@material-ui/icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Jacob.</h2>
        <div className="prompt">
          <p>
            I am a self-teaching, fulltime student currently pursuing my
            Associates of Applied Science. I run a side gig creating websites
            for small businesses. I am always expanding my toolkit and have
            knack for problem solving.
          </p>
          <a href="https://github.com/Jstevenson02">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/jacob-stevenson-406098162/">
            <LinkedIn />
          </a>
          <Email />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              CSS, HTML, MaterialUI, Native, NPM, React ReactJS, Redux,
              StyledComponents Yarn,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              .NET, ApolloServer, GraphQL, Java MongoDB, MySQL, NodeJS, Postman,
              Springboot
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C#, Java JavaScript, Python, TypeScript,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
