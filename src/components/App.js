import React, { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState([])
  const [foods, setFoods] = useState([])
  const [dateForm, setDateForm] = useState("")

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
    console.log(e.target.value)
    setDateForm(e.target.value)
  }

  function handleDateFormSubmit(e) {
    e.preventDefault()
    const newDate = {
      date: dateForm,
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
    setDateForm("")
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
            <div id="date" 
              onClick={handleClickOnDate}
            >
              {day.date}
            </div>
            <div id={day.date} style={{ display: "none" }}>I'm a div</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
