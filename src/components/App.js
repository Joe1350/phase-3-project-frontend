import React, { useEffect, useState } from "react";
import AddDateForm from "./AddDateForm";
import DateList from "./DateList";

// app
  // <h1> (website title)
  // AddDateForm
  // DateList
    // DateListing
      // <h2> (date) (clickable)
      // EditDateForm
        // EditAndDeleteDateButtons
        // <form> (edit date)
      // Food List
        //FoodListing
          // <h3> (food name)
          // EditFoodForm
            // EditAndDeleteFoodButtons
            // <form> (edit food)
          // FoodListingInfo
      // AddFoodForm
        // <form> (add food)
        // AddFoodButton

function App() {
  const [daysWithFoods, setDaysWithFoods] = useState([])
  const [editDateFormData, setEditDateFormData] = useState("")
  const [editFoodFormData, setEditFoodFormData] = useState({
    name: "",
    calories: "",
    fat: "",
    fiber: "",
  })

  useEffect(() => {
    fetch("http://localhost:9292/days_with_foods")
    .then(r => r.json())
    .then(setDaysWithFoods)
  }, [])

  function handleSetDays(newDate) {
    setDaysWithFoods([...daysWithFoods, newDate])
  }

  function handleSetFoods(updatedDays) {
    setDaysWithFoods(updatedDays)
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

  function handleDeleteFoodSubmit(e) {
    console.log(e)
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

  function handleEditDateSubmit(e) {
    e.preventDefault()
    console.log(e)

    const dayId = e.target.form.id.split("_")[0]
    const updatedDays = daysWithFoods.map(day => (
      day.id == dayId ? {...day, date: editDateFormData} : day
    ))
    const updatedDay = editDateFormData

    fetch(`http://localhost:9292/days/${dayId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        date: updatedDay,
      }),
    })
    .then(r => r.json())
    .then(setDaysWithFoods(updatedDays))
    setEditDateFormData("")
    e.target.form.style.display = "none"
    e.target.parentElement.parentElement.firstChild.firstChild.innerText = "Edit Date"
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
      <DateList
        daysWithFoods={daysWithFoods}
        displayEditDateForm={displayEditDateForm}
        handleDeleteDateClick={handleDeleteDateClick}
        handleEditDateFormChange={handleEditDateFormChange}
        handleEditDateSubmit={handleEditDateSubmit}
        handleDeleteFoodSubmit={handleDeleteFoodSubmit}
        handleEditFoodFormSubmit={handleEditFoodFormSubmit}
        handleSetFoods={handleSetFoods}
        editFoodFormData={editFoodFormData}
        setEditFoodFormData={setEditFoodFormData}
        editDateFormData={editDateFormData}
        setEditDateFormData={setEditDateFormData}
      />
    </div>
  );
}

export default App;
