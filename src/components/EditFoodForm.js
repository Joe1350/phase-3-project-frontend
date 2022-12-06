import React, { useState } from "react";
import EditAndDeleteFoodButtons from "./EditAndDeleteFoodButtons";

function EditFoodForm({
    food,
    days,
    onSetDays,
}) {
    const [editFoodFormData, setEditFoodFormData] = useState({
        name: "",
        calories: "",
        fat: "",
        fiber: "",
    })

    function handleSetEditFoodFormData(foodToDisplay) {
        setEditFoodFormData(foodToDisplay)
    }
    
    function handleEditFoodFormSubmit(e) {
        e.preventDefault()
    
        const dayWithFoodToEdit = days.find(
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
        const updatedDays = days.map(day => (
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
            .then(() => onSetDays(updatedDays))
        e.target.style.display = "none"
    }

    function handleEditFoodFormChange(e) {
        setEditFoodFormData({
            ...editFoodFormData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <EditAndDeleteFoodButtons
                food={food}
                days={days}
                onSetDays={onSetDays}
                onSetEditFoodFormData={handleSetEditFoodFormData}
            />
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
                <button type="submit">Update Food</button>
            </form>
        </div>
    )
}

export default EditFoodForm;
