import React from "react";

function EditAndDeleteFoodButtons({
  food,
  daysWithFoods,
  setEditFoodFormData,
  handleDeleteFoodSubmit
}) {
  function displayEditFoodForm(e) {
    const x = document.getElementById(e.target.className)
    const y = x.children
    const dayWithFoodToDisplay = daysWithFoods.find(day => (
      day.foods.find(food => (
        food.id == e.target.className
      ))
    ))
    const foodToDisplay = dayWithFoodToDisplay.foods.find(food => (
      food.id == e.target.className
    ))

    if (x.style.display === "none") {
      x.style.display = "block"
      e.target.innerText = "Hide Form"
      y[0].children[0].value = `${foodToDisplay.name}`
      y[2].children[0].value = foodToDisplay.calories
      y[4].children[0].value = foodToDisplay.fat
      y[6].children[0].value = foodToDisplay.fiber
      setEditFoodFormData(foodToDisplay)
    } else {
      x.style.display = "none"
      e.target.innerText = "Edit Food"
    }
  }

  return(
    <div>
      <button
        className={food.id}
        onClick={displayEditFoodForm}
      >
        Edit Food
      </button>
      <button
        className={food.id}
        onClick={handleDeleteFoodSubmit}
      >
        Delete Food
      </button>
    </div>
  )
}

export default EditAndDeleteFoodButtons;
