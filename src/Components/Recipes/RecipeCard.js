import React from "react"
import Steps from "./assets/icon-steps.svg"
import Ingredient from "./assets/icon-ingred.svg"
import Book from "./assets/icon-book.svg"
import styles from "../Recipes/recipeCard.module.scss"
import { recipes } from "../../data/recipesData"

const RecipeCard = (a) => {
  console.log("recipes", recipes)

  const Tips = () => {
    const {
      a: { steps },
    } = a

    return steps.map((step, i) => {
      return (
        <div className={styles.stepWrap} id={i}>
          <p>{step}</p>
        </div>
      )
    })
  }

  const Ingredients = () => {
    const {
      a: { ingredients },
    } = a

    return ingredients.map((ingred, i) => {
      return (
        <div className={styles.stepWrap}>
          <p>
            <img src={Steps} alt='recipes' />
            {ingred}
          </p>
        </div>
      )
    })
  }

  return (
    <div className={styles.stepIngredWrap}>
      <div className={styles.ingred}>
        <div className={styles.label}>
          <img src={Ingredient} alt='recipes' />
          <p className={styles.tag}>Ingredidents</p>
        </div>
        <Ingredients />
      </div>
      <div className={styles.steps}>
        <div className={styles.label}>
          <img src={Book} alt='recipes' />
          <p className={styles.tag}>Steps</p>
        </div>
        <Tips />
      </div>
    </div>
  )
}

export default RecipeCard
