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
import AOS from "aos"
import "aos/dist/aos.css"
import ScrollReveal from "scrollreveal"

const Home = () => {
  ScrollReveal().reveal(".headline", { delay: 300, reset: true })
  ScrollReveal().reveal(".intro", { delay: 500, reset: true })

  AOS.init({
    duration: 500,
    delay: 300,
  })

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
          <p>
            We do it for the love of food, and we want to help you and other
            home cooks discover and demystify dishes that pique your culinary
            curiosities.
          </p>
          <Link to='/recipes'>
            <button>Get Started</button>
          </Link>
        </div>
        <img src={Hero} alt='foodie' data-aos='zoom-in' />
      </div>
      <div className={styles.girlBg}>
        <img src={SittingGirl} alt='foodie' className={styles.girl} />
        <div className={styles.wrap}>
          <img src={Pasta} alt='foodie' data-aos='fade-right' />
          <div className={styles.titleWrap}>
            <h3 class='headline'>Friendly Recipes</h3>
            <p class='intro'>
              Everyone is short on time but Foodie is long on recipes for quick
              and easy recipes. If sheet pan dinners dominate weeknight meals,
              we've got your back.
            </p>
            <Link to='/recipes'>
              <button>Find your recipes</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.brownieWrap}>
        <div className={styles.titleWrap}>
          <h3 class='headline'>Easy for Beginner</h3>
          <p class='intro'>
            We've broken down the elements of cooking to make it simple to
            search for recipes that speak to you.
          </p>
        </div>
        <img src={Brownie} alt='foodie' data-aos='fade-left' />
      </div>
      <div className={styles.boyBg}>
        <img src={SittingBoy} alt='foodie' className={styles.boy} />
        <div className={styles.wrap}>
          <img src={Pancake} alt='foodie' data-aos='fade-right' />
          <div className={styles.titleWrap}>
            <h3 class='headline'>Explore Cook Journey</h3>
            <p class='intro'>
              Whether your economic strategy is motivated by gastronomic
              delights or your dietary restrictions are guiding your kitchen
              creations, there are thousands of recipes to explore.
            </p>
            <Link to='/recipes'>
              <button>Find your recipes</button>
            </Link>
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
