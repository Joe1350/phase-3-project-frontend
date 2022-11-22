import React, { useState } from "react";
import EditAndDeleteDateButtons from "./EditAndDeleteDateButtons";

function EditDateForm({
    day,
    days,
    onSetDays
}) {
    const [editDateFormData, setEditDateFormData] = useState("")

    function handleEditDateFormChange(e) {
        setEditDateFormData(e.target.value)
    }

    function handleEditDateSubmit(e) {
        e.preventDefault()
    
        const dayId = e.target.form.id.split("_")[0]
        const updatedDate = editDateFormData
        const updatedDays = days.map(day => (
            day.id == dayId ? {...day, date: updatedDate} : day
        ))
    
        fetch(`http://localhost:9292/days/${dayId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                date: updatedDate,
            }),
        })
            .then(r => r.json())
            .then(() => onSetDays(updatedDays))
        setEditDateFormData("")
        e.target.form.style.display = "none"
        e.target.parentElement.parentElement.firstChild.firstChild.innerText = "Edit Date"
    }

    return(
        <div>
            <EditAndDeleteDateButtons
                day={day}
                days={days}
                onSetDays={onSetDays}
            />
            <form id={`${day.id}_${day.date}`} style={{ display: "none" }}>
                <label>
                    New Date: 
                    <input
                        onChange={handleEditDateFormChange}
                        type="text"
                        name="date"
                        value={editDateFormData}
                    />
                </label>
                <br></br>
                <button
                    onClick={handleEditDateSubmit}
                    type="submit"
                >
                    Update Date
                </button>
            </form>
        </div>
    )
}

export default EditDateForm;
