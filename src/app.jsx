import React, { useState, useEffect } from 'react';

import './app.sass';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import { ReactComponent as InstagramIcon } from './assets/instagram.svg';
import { ReactComponent as SpotifyIcon } from './assets/spotify.svg';
import { ReactComponent as MailIcon } from './assets/mail.svg';
import Chatter from './assets/chatter.png';
import aMDB from './assets/amdb.png';
import foodie from './assets/foodie.png';
import YummyDish from './assets/yummy.png';

const App = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.scrollY > 80 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app' id='home'>
      <header className={isSticky ? 'active' : ''}>
        <div className='header-content'>
          <a href='#home' className='header-logo'>
            Peter Cho
          </a>
          <span className='header-links'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </span>
        </div>
      </header>
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-title'>Hi, I'm Peter.</div>
          <div className='hero-blurb'>
            I'm a front end developer with a passion for solving problems,
            learning new skills, and improving at existing ones.
          </div>
          <div className='hero-social'>
            <a href='https://github.com/pcho90'>
              <GithubIcon className='icon' />
            </a>
            <a href='https://linkedin.com/in/pcho90'>
              <LinkedInIcon className='icon' />
            </a>
          </div>
        </div>
      </section>
      <section className='about' id='about'>
        <div className='about-content'>
          <h3>About Me</h3>
          <p>
            I'm a front end developer located in New York City. I previously
            spent four years cooking in fine dining restaurants, but switched
            over to coding in an effort to find job stability and a better work
            life balance. I've cooked at Jean-Georges (2 Michelin stars), Per Se
            (3 Michelin stars), and L'ATELIER de Joël Robuchon (2 Michelin
            stars). My experience in these kitchens has trained my work ethic,
            my attention to detail, and my ability to problem solve.
          </p>
          <p>
            Growing up, I've always had an affinity towards anything that I
            found mentally stimulating. I particularly enjoyed strategy games,
            card games, and computer games. As a 10 year old, I often tinkered
            with HTML and Photoshop to build Dragonball Z fan sites (Notepad was
            my IDE of choice). Shortly after enrolling in General Assembly's
            Software Engineering Immersive, my passion for coding was rekindled,
            as I quickly rediscovered the gratification that I gain from
            analyzing and solving coding problems.
          </p>
          <p>
            When I'm not coding, I like to boulder (I've been climbing for 12
            years), bike around the city, and try out new restaurants.
          </p>
        </div>
      </section>
      <section className='projects' id='projects'>
        <h3>Projects</h3>
        <div className='projects-content'>
          <div className='project'>
            <img className='project-image' src={Chatter} alt='Chatter' />
            <div className='project-content'>
              <label>Chatter</label>
              <span className='project-subtitle'>
                React, Ruby on Rails, PostgreSQL
              </span>
              <span className='project-links'>
                <a href='http://cute-bird.surge.sh/'>LIVE</a>
                <a href='https://github.com/pcho90/chatter'>GITHUB</a>
              </span>
            </div>
          </div>
          <div className='project'>
            <img className='project-image' src={aMDB} alt='aMDB' />
            <div className='project-content'>
              <label>aMDB</label>
              <span className='project-subtitle'>React</span>
              <span className='project-links'>
                <a href='https://unruffled-curran-775cfe.netlify.app/'>LIVE</a>
                <a href='https://github.com/pcho90/amdb'>GITHUB</a>
              </span>
            </div>
          </div>
          <div className='project'>
            <img className='project-image' src={foodie} alt='foodie' />
            <div className='project-content'>
              <label>foodie</label>
              <span className='project-subtitle'>JavaScript</span>
              <span className='project-links'>
                <a href='https://unruffled-khorana-a6a8a5.netlify.app/'>LIVE</a>
                <a href='https://github.com/pcho90/foodie'>GITHUB</a>
              </span>
            </div>
          </div>
          <div className='project'>
            <img className='project-image' src={YummyDish} alt='Yummy Dish' />
            <div className='project-content'>
              <label>Yummy Dish</label>
              <span className='project-subtitle'>React, Express, MongoDB</span>
              <span className='project-links'>
                <a href='http://tan-wrench.surge.sh/'>LIVE</a>
                <a href='https://github.com/pcho90/yummy-dish'>GITHUB</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='contact' id='contact'>
        <div className='contact-content'>
          <h3>Contact</h3>
          <span className='contact-social'>
            <a href='mailto:pcho51990@gmail.com'>
              <MailIcon className='icon' />
            </a>
            <a href='https://github.com/pcho90'>
              <GithubIcon className='icon' />
            </a>
            <a href='https://linkedin.com/in/pcho90'>
              <LinkedInIcon className='icon' />
            </a>
            <a href='https://instagram.com/pcho90'>
              <InstagramIcon className='icon' />
            </a>
            <a href='https://open.spotify.com/user/1258157666?si=yQbLYz_URe2e6Dp7znJBVA'>
              <SpotifyIcon className='icon' />
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default App;
