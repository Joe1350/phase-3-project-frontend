import React, { useState } from "react";

function AddFoodForm({
    day,
    daysWithFoods,
    onSetFoods
}) {
    const [addFoodFormData, setAddFoodFormData] = useState({
        name: "",
        category: "",
        fat: "",
        fiber: "",
    })

    function displayAddFoodFormClick(e) {
        const x = e.target.previousSibling
    
        if (x.style.display === "none") {
          x.style.display = "block"
          e.target.innerText = "Hide Form"
        } else {
          x.style.display = "none"
          e.target.innerText = "Add Food"
        }
      }
    
      function handleAddFoodFormChange(e) {
        setAddFoodFormData({
          ...addFoodFormData,
          [e.target.name]: e.target.value,
        })
      }
    
      function handleAddFoodFormSubmit(e) {
        e.preventDefault()
    
        const dayWithFood = daysWithFoods.find(day => day.id == e.target.id)
        const newFood = {
          name: addFoodFormData.name,
          calories: addFoodFormData.calories,
          fat: addFoodFormData.fat,
          fiber: addFoodFormData.fiber,
          day_id: e.target.id
        }
    
        fetch(`http://localhost:9292/days_with_foods/${e.target.id}/foods`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newFood),
        })
        .then(r => r.json())
        .then(() => {
          const updatedFoods = [...dayWithFood.foods, newFood]
          const updatedDay = {...dayWithFood, foods: updatedFoods}
          const updatedDays = daysWithFoods.map(day => (
            day.id == dayWithFood.id ? updatedDay : day
          ))
          onSetFoods(updatedDays)
        })
        e.target.style.display = "none"
        e.target.nextSibling.innerText = "Add Food"
        setAddFoodFormData({
          name: "",
          category: "",
          fat: "",
          fiber: "",
          day_id: "",
        })
    }

    return (
        <div>
            <form
                id={day.id}
                style={{ display: "none" }}
                onSubmit={handleAddFoodFormSubmit}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fat:
                    <input
                        type="number"
                        name="fat"
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fiber:
                    <input
                        type="number"
                        name="fiber"
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <button>Submit Food</button>
              </form>
              <button
                id="displayAddFoodForm"
                onClick={displayAddFoodFormClick}
              >
                Add Food
              </button>
        </div>
    )
}

export default AddFoodForm;