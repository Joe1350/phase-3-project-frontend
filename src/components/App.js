import React, { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState([])
  const [foods, setFoods] = useState([])
  // const [daysWithFoods, setDaysWithFoods] = useState([])
  const [dateFormData, setDateFormData] = useState("")
  const [addFoodFormData, setAddFoodFormData] = useState({
    name: "",
    category: "",
    fat: "",
    fiber: "",
  })

  useEffect(() => {
    fetch("http://localhost:9292/days")
    .then(r => r.json())
    .then(setDays)
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/foods")
    .then(r => r.json())
    .then(setFoods)
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:9292/days_with_foods")
  //   .then(r => r.json())
  //   .then(setDaysWithFoods)
  // }, [])

  function handleClickOnDate(e) {
    const date = e.target.innerHTML
    const x = document.getElementById(date)

    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  function handleDateFormChange(e) {
    setDateFormData(e.target.value)
  }

  function handleDateFormSubmit(e) {
    e.preventDefault()
    const newDate = {
      date: dateFormData,
    }
    fetch("http://localhost:9292/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDate),
    })
    .then(r => r.json())
    .then(setDays([...days, newDate]))
    setDateFormData("")
  }

  function handleDisplayAddFoodFormClick(e) {
    const x = e.target.previousSibling

    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
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

    const newFood = {
      name: addFoodFormData.name,
      calories: addFoodFormData.calories,
      fat: addFoodFormData.fat,
      fiber: addFoodFormData.fiber,
      day_id: e.target.id
    }

    fetch("http://localhost:9292/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFood),
    })
    .then(r => r.json())
    .then(setFoods([...foods, newFood]))
  }

  function handleDisplayEditFoodForm(e) {
    const x = document.getElementById(e.target.className)

    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <form onSubmit={handleDateFormSubmit}>
        <label>
          Add a date: 
          <input type="text" name="date" onChange={handleDateFormChange} />
          <button type="submit">Add Day</button>
          <br></br>
          <small>*must be entered MM/DD/YYYY</small>
        </label>
      </form>
      <div id="date-list">
        {days.map((day) => (
          <div id="date-listing" key={day.id}>
            <h2 id="date" 
              onClick={handleClickOnDate}
            >
              {day.date}
            </h2>
            <div id={day.date} style={{ display: "none" }}>
              {foods.map((food) => {
                if (day.id == food.day_id) {
                  return (
                    <div key={food.id}>
                      <h3>
                        {food.name}
                        <button type="submit">Delete Food</button>
                        <button
                          class={food.id}
                          onClick={handleDisplayEditFoodForm}
                        >
                          Edit Food
                        </button>
                      </h3>
                      <form
                        id={food.id}
                        style={{ display: "none" }}
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
                        <button>Update Food</button>
                      </form>
                      <div>
                        Calories: {food.calories}
                        <br></br>
                        Fat: {food.fat}
                        <br></br>
                        Fiber {food.fiber}
                        <br></br>
                        Points: {Math.round((food.calories/50)+(food.fat/12)-(food.fiber/12))}
                      </div>
                    </div>
                  )
                }
              })}
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
                onClick={handleDisplayAddFoodFormClick}
              >
                Add Food
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
