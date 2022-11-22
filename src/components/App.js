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
    .then(() => handleSetFoods(updatedDays))
  }

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <AddDateForm onSetDays={handleSetDays} />
      <DateList
        daysWithFoods={daysWithFoods}
        handleDeleteDateClick={handleDeleteDateClick}
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
