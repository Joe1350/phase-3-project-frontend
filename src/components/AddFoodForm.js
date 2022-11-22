import React, { useState } from "react";
import AddFoodButton from "./AddFoodButton";

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
