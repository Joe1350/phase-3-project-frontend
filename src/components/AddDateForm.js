import React, { useState } from "react";

function AddDateForm({ onSetDays }) {
    const [dateFormData, setDateFormData] = useState({
        date: "",
        foods: [],
    })

    function handleDateFormChange(e) {
        setDateFormData({
            date: e.target.value,
            foods: [],
        })
    }

    function handleDateFormSubmit(e) {
        e.preventDefault()
    
        const newDate = dateFormData
    
        fetch("http://localhost:9292/days_with_foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDate),
        })
            .then(r => r.json())
            .then(newDate => onSetDays(newDate))
        setDateFormData({...dateFormData, date: ""})
    }

    return (
        <form onSubmit={handleDateFormSubmit}>
            <label>
                Add a date: 
                <input
                    type="text"
                    name="date"
                    value={dateFormData.date}
                    onChange={handleDateFormChange}
                />
                <button type="submit">Add Day</button>
                <br></br>
                <small>
                    *must be entered MM/DD/YYYY
                    <br></br>
                    *currently dates cannot be deleted
                </small>
            </label>
        </form>
    )
}

export default AddDateForm;
