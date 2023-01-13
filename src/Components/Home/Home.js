import React from "react"
import { Link } from "react-router-dom"
import styles from "./home.module.scss"
import Logo from "./assets/Logo.svg"
import Hero from "./assets/hero.svg"
import SittingGirl from "./assets/sittingGirl.svg"
import Pasta from "./assets/pasta.svg"
import Brownie from "./assets/brownie.svg"
import SittingBoy from "./assets/sittingBoy.svg"
import Pancake from "./assets/pancake.svg"
import Email from "./assets/icon-email.svg"
import Faceook from "./assets/icon-facebook.svg"
import Instagram from "./assets/icon-instagram.svg"
import Map from "./assets/icon-map.svg"
import Twitter from "./assets/icon-twitter.svg"

const Home = () => {
  return (
    <div>
      <header className={styles.navWrap}>
        <Link to='/'>
          <img src={Logo} alt='foodie' />
        </Link>
        <div className={styles.linkWrap}>
          <Link to='/'>
            <li>HOME</li>
          </Link>
          <Link to='/recipes'>
            <li>RECIPES</li>
          </Link>
        </div>
      </header>
      <div className={styles.heroWrap}>
        <div className={styles.titleWrap}>
          <h3>Foodie</h3>
          <p>A quick recipes guide you to be a professional chef</p>
          <Link to='/recipes'>
            <button>Get Started</button>
          </Link>
        </div>
        <img src={Hero} alt='foodie' />
      </div>
      <div className={styles.girlBg}>
        <img src={SittingGirl} alt='foodie' className={styles.girl} />
        <div className={styles.wrap}>
          <img src={Pasta} alt='foodie' />
          <div className={styles.titleWrap}>
            <h3>Friendly Recipes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              soluta earum voluptates cupiditate blanditiis saepe eos
              exercitationem.
            </p>
            <button>Find your recipes</button>
          </div>
        </div>
      </div>
      <div className={styles.brownieWrap}>
        <div className={styles.titleWrap}>
          <h3>Easy for beginner</h3>
          <p>
            Lorem ipsum dolor sit amet met met consectetur. Egestas non dolor
            lobortis duis.
          </p>
        </div>
        <img src={Brownie} alt='foodie' />
      </div>
      <div className={styles.boyBg}>
        <img src={SittingBoy} alt='foodie' className={styles.boy} />
        <div className={styles.wrap}>
          <img src={Pancake} alt='foodie' />
          <div className={styles.titleWrap}>
            <h3>Explore Cook Journey!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              soluta earum voluptates cupiditate blanditiis saepe eos
              exercitationem.
            </p>
            <button>Find your recipes</button>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.newsWrap}>
          <p>Weekly Recipes</p>
          <div className={styles.inputBtnWrap}>
            <input type='email' placeholder='Email' />
            <button className={styles.newsBtn}>
              Subscribe <img src={Email} alt='foodie' />
            </button>
          </div>
        </div>
        <div className={styles.socialWrap}>
          <a href='#'>
            <img src={Faceook} alt='foodie' />
          </a>
          <a href='#'>
            <img src={Instagram} alt='foodie' />
          </a>
          <a href='#'>
            <img src={Twitter} alt='foodie' />
          </a>
          <a href='#' className={styles.x}>
            <img src={Map} alt='foodie' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
