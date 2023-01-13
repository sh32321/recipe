import React from "react"
import Steps from "./assets/icon-steps.svg"
import styles from "../Recipes/recipeCard.module.scss"

const RecipeCard = (id) => {
  const AutoList = () => {
    const {
      steps: { steps },
    } = id

    return steps.map((step, i) => (
      // <div>
      //   <li>{step}</li>
      // </div>
      <div className={styles.stepWrap}>
        <p>
          <img src={Steps} alt='recipes' />
          {step}
        </p>
      </div>
    ))
  }

  return (
    <>
      <AutoList />
    </>
  )
}

export default RecipeCard
