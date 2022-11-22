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

  useEffect(() => {
    fetch("http://localhost:9292/days_with_foods")
    .then(r => r.json())
    .then(setDaysWithFoods)
  }, [])

  function handleSetDaysWithFoods(updatedDays) {
    setDaysWithFoods(updatedDays)
  }

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <AddDateForm
        daysWithFoods={daysWithFoods}
        onSetDaysWithFoods={handleSetDaysWithFoods}
      />
      <DateList
        daysWithFoods={daysWithFoods}
        onSetDaysWithFoods={handleSetDaysWithFoods}
      />
    </div>
  );
}

export default App;
