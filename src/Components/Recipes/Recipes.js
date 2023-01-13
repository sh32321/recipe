import React, { useState, useEffect, useRef } from "react"
import styles from "../Recipes/recipes.module.scss"
import { Link } from "react-router-dom"
import Logo from "../Home/assets/Logo.svg"
import All from "./assets/icon-all.svg"
import Breakfast from "./assets/icon-breakfast.svg"
import Lunch from "./assets/icon-lunch.svg"
import Dinner from "./assets/icon-dinner.svg"
import Dessert from "./assets/icon-dessert.svg"
import Popular from "./assets/icon-popular.svg"
import Ingredient from "./assets/icon-ingred.svg"
import CookTime from "./assets/icon-cookTime.svg"
import Steps from "./assets/icon-steps.svg"
import Book from "./assets/icon-book.svg"
import Email from "../Home/assets/icon-email.svg"
import Faceook from "../Home/assets/icon-facebook.svg"
import Instagram from "../Home/assets/icon-instagram.svg"
import Map from "../Home/assets/icon-map.svg"
import Twitter from "../Home/assets/icon-twitter.svg"
import { recipes } from "../../data/recipesData"
import RecipeCard from "./RecipeCard"

const Recipes = ({ recipesInfo }) => {
  const [isActive, setIsActive] = useState(1)
  const [loading, setLoading] = useState(false)
  const [click, setClick] = useState(false)
  const [id, setId] = useState()
  const [filter, setFilter] = useState([])
  const [list] = useState(recipes)
  const [clickedOutside, setClickedOutside] = useState(false)
  const myRef = useRef()

  const allArr = () => {
    setFilter(recipes)
    setIsActive(1)
  }
  const breakfastArr = () => {
    const breakfast = list.filter((recipe) => recipe.tags.includes("breakfast"))
    setFilter(breakfast)
    setIsActive(2)
  }
  const lunchArr = () => {
    const lunch = list.filter((recipe) => recipe.tags.includes("lunch"))
    setFilter(lunch)
    setIsActive(3)
  }
  const dinnerArr = () => {
    const dinner = list.filter((recipe) => recipe.tags.includes("dinner"))
    setFilter(dinner)
    setIsActive(4)
  }
  const dessertArr = () => {
    const dessert = list.filter((recipe) => recipe.tags.includes("dessert"))
    setFilter(dessert)
    setIsActive(5)
  }
  const popularArr = () => {
    const popular = list.filter((recipe) => recipe.tags.includes("popular"))
    setFilter(popular)
    setIsActive(6)
  }

  const clickHandler = (e) => {
    console.log("clicked from handler")
    setClick(!click)
    setId(e.target.value)
  }

  const handleClickOutside = (e) => {
    setClick(false)
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true)
    }
  }

  const handleClickInside = () => setClickedOutside(false)
  useEffect(() => {
    console.log("click from useffect")
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [id, click])

  const AutoList = ({ list }) => {
    return list.map((a, i) => {
      const { ingredients } = a
      const Ingred = () => {
        return ingredients.map((ingred, i) => (
          <div className={styles.ingredWrap}>
            <p>
              <img src={Steps} alt='recipes' />
              {ingred}
            </p>
          </div>
        ))
      }
      return (
        <div className={styles.container}>
          <div key={i} className={styles.recipesWrap}>
            <div>
              <img src={a.image} alt='recipes' className={styles.img} />
            </div>
            <div className={styles.descriWrap}>
              <h2>{a.title}</h2>

              <div className={styles.cookTimeWrap}>
                <div className={styles.label}>
                  <img src={CookTime} alt='recipes' />
                  <p className={styles.tag}>Cook Time</p>
                </div>
                <p> {a.time} min</p>
              </div>

              <p>{a.desc}</p>
              <button
                onClick={clickHandler}
                value={a.id}
                className={styles.moreBtn}>
                MORE
              </button>
              <div
                className={styles.infoWrap}
                onClick={handleClickInside}
                ref={myRef}>
                {clickedOutside ? (
                  <>
                    {click && id == a.id ? (
                      <div className={styles.stepIngredWrap}>
                        <div className={styles.ingred}>
                          <div className={styles.label}>
                            <img src={Ingredient} alt='recipes' />
                            <p className={styles.tag}>Ingredidents</p>
                          </div>
                          <Ingred />
                        </div>
                        <div className={styles.steps}>
                          <div className={styles.label}>
                            <img src={Book} alt='recipes' />
                            <p className={styles.tag}>Steps</p>
                          </div>
                          <RecipeCard id={id} steps={a} />
                        </div>
                      </div>
                    ) : (
                      <p className={styles.none}>.</p>
                    )}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
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
      <div className={styles.tabsContainer}>
        <div className={styles.tabsWrap}>
          <button
            onClick={allArr}
            className={isActive === 1 ? styles.active : styles.inActive}>
            <img src={All} alt='foodie' />
            ALL
          </button>
          <button
            onClick={breakfastArr}
            className={isActive === 2 ? styles.active : styles.inActive}>
            <img src={Breakfast} alt='foodie' />
            Breakfast
          </button>
          <button
            onClick={lunchArr}
            className={isActive === 3 ? styles.active : styles.inActive}>
            <img src={Lunch} alt='foodie' />
            Lunch
          </button>
          <button
            onClick={dinnerArr}
            className={isActive === 4 ? styles.active : styles.inActive}>
            <img src={Dinner} alt='foodie' />
            Dinner
          </button>
          <button
            onClick={dessertArr}
            className={isActive === 5 ? styles.active : styles.inActive}>
            <img src={Dessert} alt='foodie' />
            Dessert
          </button>
          <button
            onClick={popularArr}
            className={isActive === 6 ? styles.active : styles.inActive}>
            <img src={Popular} alt='foodie' />
            Popular
          </button>
        </div>
      </div>
      <AutoList list={filter.length > 0 ? filter : list} />
      <footer className={styles.footer}>
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
    </>
  )
}

export default Recipes
