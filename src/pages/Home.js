import React from 'react';
import { LinkedIn, Email, GitHub } from '@material-ui/icons';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../styles/Home.css';
import gradient from '../assets/gradient4.jpg';
import space from '../assets/space2.jpg';


function Home() {
  return (
    <div className="home">
      <Parallax pages={1.5}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: 'cover',
          }}
          factor={2}
          speed={1}>
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
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.85}
          speed={0.5}
        >
          <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
              <li className="item">
                <h2>Front-End</h2>
                <span>
                  CSS, HTML, MaterialUI, Native, NPM, React, ReactJS, Redux,
                  StyledComponents Yarn
                </span>
              </li>
              <li className="item">
                <h2>Back-End</h2>
                <span>
                  .NET, ApolloServer, GraphQL, MongoDB, MySQL, NodeJS, Postman,
                  Springboot
                </span>
              </li>
              <li className="item">
                <h2>Languages</h2>
                <span>C#, Java, JavaScript, Python, TypeScript</span>
              </li>
            </ol>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
