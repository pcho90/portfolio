import React, { useState, useEffect, useRef } from 'react';

import './app.sass';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import Chatter from './assets/chatter.png';
import aMDB from './assets/amdb.png';
import foodie from './assets/foodie.png';
import YummyDish from './assets/yummy.png';

const App = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    window.scrollY > ref.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app' id='home'>
      <header className={isSticky ? 'active' : ''} ref={ref}>
        <div className='header-content'>
          <span className='header-logo'>Peter Cho</span>
          <span className='header-links'>
            <a href='#home'>About</a>
            <a href='#home'>Projects</a>
            <a href='#home'>Experience</a>
            <a href='#home'>Contact</a>
          </span>
        </div>
      </header>
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-title'>Hi, I'm Peter.</div>
          <div className='hero-blurb'>
            I'm a software engineer with a passion for solving problems,
            learning new skills, and improving at existing ones.
          </div>
          <div className='hero-social'>
            <GithubIcon className='hero-icon' />
            <LinkedInIcon className='hero-icon' />
          </div>
        </div>
      </section>
      <section className='projects'>
        <div className='projects-title'>Projects</div>
        <div className='projects-content'>
          <div className='project'>
            <img className='project-image' src={Chatter} alt='Chatter' />
            <div className='project-content'>
              <label>Chatter</label>
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
              <span className='project-links'>
                <a href='http://tan-wrench.surge.sh/'>LIVE</a>
                <a href='https://github.com/pcho90/yummy-dish'>GITHUB</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='experience'>
        <div className='experience-content'>
          <div className='experience-title'>Experience</div>
        </div>
      </section> */}
    </div>
  );
};

export default App;
