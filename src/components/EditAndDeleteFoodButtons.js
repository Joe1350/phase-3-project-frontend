import React from "react";

function EditAndDeleteFoodButtons({
  food,
  daysWithFoods,
  handleSetFoods,
  setEditFoodFormData
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

  function handleDeleteFoodSubmit(e) {
    const dayWithFoodToDelete = daysWithFoods.find(
      day => day.foods.find(food => food.id == e.target.className)
    )
    const updatedFoods = dayWithFoodToDelete.foods.filter(food => (
      food.id == e.target.className ? null : food
    ))
    const updatedDay = {...dayWithFoodToDelete, foods: updatedFoods}
    const updatedDays = daysWithFoods.map(day => (
      day.id == dayWithFoodToDelete.id ? updatedDay : day
    ))

    fetch(`http://localhost:9292/foods/${e.target.className}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => handleSetFoods(updatedDays))
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
