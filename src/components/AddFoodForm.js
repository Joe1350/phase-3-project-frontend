import React, { useState } from "react";
import AddFoodButton from "./AddFoodButton";

function AddFoodForm({ day, days, onSetDays }) {
    const [addFoodFormData, setAddFoodFormData] = useState({
        name: "",
        calories: "",
        fat: "",
        fiber: "",
        day_id: day.id,
    })
    
    function handleAddFoodFormSubmit(e) {
        e.preventDefault()
    
        const newFood = addFoodFormData
    
        fetch(`http://localhost:9292/days/${day.id}/foods`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFood),
        })
            .then(r => r.json())
            .then(newDay => {
                const updatedDays = days.map(d => d.id === day.id ? newDay : d)
                onSetDays(updatedDays)
            })
        setAddFoodFormData({
            name: "",
            calories: "",
            fat: "",
            fiber: "",
            day_id: "",
        })
        e.target.style.display = "none"
        e.target.nextSibling.innerText = "Add Food"
    }

    function handleAddFoodFormChange(e) {
        setAddFoodFormData({
            ...addFoodFormData,
            [e.target.name]: e.target.value,
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
                        value={addFoodFormData.name}
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        value={addFoodFormData.calories}
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fat:
                    <input
                        type="number"
                        name="fat"
                        value={addFoodFormData.fat}
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fiber:
                    <input
                        type="number"
                        name="fiber"
                        value={addFoodFormData.fiber}
                        onChange={handleAddFoodFormChange}
                    />
                </label>
                <br></br>
                <button type="submit">Submit Food</button>
            </form>
            <AddFoodButton />
        </div>
    )
}

export default AddFoodForm;
