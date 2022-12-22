import React from "react";

function EditAndDeleteFoodButtons({
  food,
  day,
  days,
  onSetDays,
  onSetEditFoodFormData
}) {
  function displayEditFoodFormClick(e) {
    const x = e.target.parentElement.parentElement.children[1]
    const y = x.children

    if (x.style.display === "none") {
      x.style.display = "block"
      e.target.innerText = "Hide Form"
      y[0].children[0].value = `${food.name}`
      y[2].children[0].value = food.calories
      y[4].children[0].value = food.fat
      y[6].children[0].value = food.fiber
      onSetEditFoodFormData(food)
    } else {
      x.style.display = "none"
      e.target.innerText = "Edit Food"
    }
  }

  function handleDeleteFoodSubmit(e) {
    const updatedFoods = day.foods.filter(f => f.id == food.id ? null : f)
    const updatedDay = {...day, foods: updatedFoods}
    const updatedDays = days.map(d => d.id == day.id ? updatedDay : d)

    fetch(`http://localhost:9292/foods/${e.target.className}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => onSetDays(updatedDays))
  }

  return(
    <div>
      <button
        className={food.id}
        onClick={displayEditFoodFormClick}
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
