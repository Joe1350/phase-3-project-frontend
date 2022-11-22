import React, { useState } from "react";

function AddDateForm({
    daysWithFoods,
    onSetDaysWithFoods
}) {
    const [dateFormData, setDateFormData] = useState({
        date: "",
        foods: [],
    })

    function handleAddDateFormSubmit(e) {
        e.preventDefault()
    
        const newDate = dateFormData
        const updatedDays = [...daysWithFoods, newDate]
    
        fetch("http://localhost:9292/days_with_foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDate),
        })
            .then(r => r.json())
            .then(() => onSetDaysWithFoods(updatedDays))
        setDateFormData({...dateFormData, date: ""})
    }

    function handleAddDateFormChange(e) {
        setDateFormData({
            date: e.target.value,
            foods: [],
        })
    }

    return (
        <form onSubmit={handleAddDateFormSubmit}>
            <label>
                Add a date: 
                <input
                    type="text"
                    name="date"
                    value={dateFormData.date}
                    onChange={handleAddDateFormChange}
                />
                <button type="submit">Add Day</button>
            </label>
        </form>
    )
}

export default AddDateForm;
