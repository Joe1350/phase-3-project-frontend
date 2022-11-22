import React, { useEffect, useState } from "react";
import AddDateForm from "./AddDateForm";
import DateList from "./DateList";
import AddFoodForm from "./AddFoodForm";

// app
  // <h1>
  // AddDateForm
  // DateList
    // DateListing
      // <button> edit date
      // <button> delete date
      // EditDateForm
      // <h2>
      // Food List
        //FoodListing
          // <h3>
          // <button> (edit food)
          // <button> (delete food)
          // EditFoodForm
          // FoodInfo
        // AddFoodForm
          // <form>
          // <button> (add food)

function App() {
  const [daysWithFoods, setDaysWithFoods] = useState([])
  const [editDateFormData, setEditDateFormData] = useState("")
  const [editFoodFormData, setEditFoodFormData] = useState({
    name: "",
    calories: "",
    fat: "",
    fiber: "",
  })

  // const foodToDisplay = day

  useEffect(() => {
    fetch("http://localhost:9292/days_with_foods")
    .then(r => r.json())
    .then(setDaysWithFoods)
  }, [])

  function handleClickOnDate(e) {
    const date = e.target.innerHTML
    const x = document.getElementById(date)

    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  function handleSetDays(newDate) {
    setDaysWithFoods([...daysWithFoods, newDate])
  }

  function handleSetFoods(updatedDays) {
    setDaysWithFoods(updatedDays)
  }

  function displayEditFoodForm(e) {
    const x = document.getElementById(e.target.className)
    console.log(x)
    const y = x.children
    console.log(y)
    const dayWithFoodToDisplay = daysWithFoods.find(day => (
      day.foods.find(food => (
        food.id == e.target.className
      ))
    ))
    console.log(dayWithFoodToDisplay)
    const foodToDisplay = dayWithFoodToDisplay.foods.find(food => (
      food.id == e.target.className
    ))
    console.log(foodToDisplay.name)
    console.log(document.getElementsByClassName("name"))

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

  function handleEditFoodFormChange(e) {
    setEditFoodFormData({
      ...editFoodFormData,
      [e.target.name]: e.target.value,
    })
  }

  function handleEditFoodFormSubmit(e) {
    e.preventDefault()

    const dayWithFoodToEdit = daysWithFoods.find(
      day => day.foods.find(food => food.id == e.target.id)
    )
    const updatedFood = {
      name: editFoodFormData.name,
      calories: editFoodFormData.calories,
      fat: editFoodFormData.fat,
      fiber: editFoodFormData.fiber,
      day_id: dayWithFoodToEdit.id
    }
    const updatedFoods = dayWithFoodToEdit.foods.map(food => (
      food.id == e.target.id ? updatedFood : food
    ))
    const updatedDay = {...dayWithFoodToEdit, foods: updatedFoods}
    const updatedDays = daysWithFoods.map(day => (
      day.id == dayWithFoodToEdit.id ? updatedDay : day
    ))

    fetch(`http://localhost:9292/foods/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
    .then(r => r.json())
    .then(setDaysWithFoods(updatedDays))
    e.target.style.display = "none"
    setEditFoodFormData({
      name: "",
      category: "",
      fat: "",
      fiber: "",
    })
  }

  function handleDeleteFood(e) {
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
    .then(setDaysWithFoods(updatedDays))
  }

  function displayEditDateForm(e) {
    const x = document.getElementById(e.target.className)

    if (x.style.display === "none") {
      x.style.display = "block"
      e.target.innerText = "Hide Form"
    } else {
      x.style.display = "none"
      e.target.innerText = "Edit Date"
    }
  }
  
  function handleEditDateFormChange(e) {
    setEditDateFormData(e.target.value)
  }

  function handleEditDate(e) {
    e.preventDefault()

    const dayId = e.target.form.id.split("_")[0]
    const updatedDays = daysWithFoods.map(day => (
      day.id == dayId ? {...day, date: editDateFormData} : day
    ))

    fetch(`http://localhost:9292/days/${dayId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        date: editDateFormData,
      }),
    })
    .then(r => r.json())
    .then(setDaysWithFoods(updatedDays))
    e.target.form.style.display = "none"
    e.target.form.previousSibling.previousSibling.innerText = "Edit Date"
  }

  function handleDeleteDateClick(e) {
    const dayId = e.target.className.split("_")[1]
    const updatedDays = daysWithFoods.filter(day => (
      day.id == dayId ? null : day
    ))
    console.log(updatedDays)

    fetch(`http://localhost:9292/days/${dayId}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(setDaysWithFoods(updatedDays))
  }

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <AddDateForm onSetDays={handleSetDays} />
      <div id="date-list">
        {daysWithFoods.map((day) => (
          <div id="date-listing" key={day.id}>
            <h2 id="date" 
              onClick={handleClickOnDate}
            >
              {day.date}
            </h2>
            <div id={day.date} style={{ display: "none" }}>
              <button
                className={`${day.id}_${day.date}`}
                onClick={displayEditDateForm}
              >
                Edit Date
              </button>
              <button
                className={`${day.date}_${day.id}`}
                onClick={handleDeleteDateClick}
              >
                Delete Date
              </button>
              <form id={`${day.id}_${day.date}`} style={{ display: "none" }}>
                <label>
                  New Date: 
                  <input onChange={handleEditDateFormChange} type="text" name="date" />
                </label>
                <br></br>
                <button
                  onClick={handleEditDate}
                  type="submit"
                >
                  Update Date
                </button>
              </form>
              {day.foods.map((food) => {
                  return (
                    <div key={food.id}>
                      <h3>
                        {food.name}
                      </h3>
                      <button
                        className={food.id}
                        onClick={displayEditFoodForm}
                      >
                        Edit Food
                      </button>
                      <button
                        className={food.id}
                        onClick={handleDeleteFood}
                      >
                        Delete Food
                      </button>
                      <form
                        id={food.id}
                        className={food.day_id}
                        style={{ display: "none" }}
                        onSubmit={handleEditFoodFormSubmit}
                      >
                        <label>
                          Name:
                          <input
                            type="text"
                            name="name"
                            className="name"
                            onChange={handleEditFoodFormChange}
                          />
                        </label>
                        <br></br>
                        <label>
                          Calories:
                          <input
                            type="number"
                            name="calories"
                            className="calories"
                            onChange={handleEditFoodFormChange}
                          />
                        </label>
                        <br></br>
                        <label>
                          Fat:
                          <input
                            type="number"
                            name="fat"
                            className="fat"
                            onChange={handleEditFoodFormChange}
                          />
                        </label>
                        <br></br>
                        <label>
                          Fiber:
                          <input
                            type="number"
                            name="fiber"
                            className="fiber"
                            onChange={handleEditFoodFormChange}
                          />
                        </label>
                        <br></br>
                        <button>Update Food</button>
                      </form>
                      <div>
                        Calories: {food.calories}
                        <br></br>
                        Fat: {food.fat} grams
                        <br></br>
                        Fiber: {food.fiber} grams
                        <br></br>
                        WW Points: {Math.round(food.calories/50+(food.fat-food.fiber)/12)}
                      </div>
                    </div>
                  )
                }
              )}
              <AddFoodForm
                day={day}
                daysWithFoods={daysWithFoods}
                onSetFoods={handleSetFoods}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
