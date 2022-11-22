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
  const [days, setDays] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/days")
    .then(r => r.json())
    .then(setDays)
  }, [])

  function handleSetDays(updatedDays) {
    setDays(updatedDays)
  }

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <AddDateForm
        days={days}
        onSetDays={handleSetDays}
      />
      <DateList
        days={days}
        onSetDays={handleSetDays}
      />
    </div>
  );
}

export default App;
