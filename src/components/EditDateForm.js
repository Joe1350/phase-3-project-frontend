import React from "react";
import EditAndDeleteDateButtons from "./EditAndDeleteDateButtons";

function EditDateForm({
    day,
    daysWithFoods,
    onSetDaysWithFoods,
    editDateFormData,
    setEditDateFormData
}) {
    function handleEditDateFormChange(e) {
        setEditDateFormData(e.target.value)
    }

    function handleEditDateSubmit(e) {
        e.preventDefault()
    
        const dayId = e.target.form.id.split("_")[0]
        const updatedDays = daysWithFoods.map(day => (
            day.id == dayId ? {...day, date: editDateFormData} : day
        ))
        const updatedDay = editDateFormData
    
        fetch(`http://localhost:9292/days/${dayId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                date: updatedDay,
            }),
        })
            .then(r => r.json())
            .then(() => onSetDaysWithFoods(updatedDays))
        setEditDateFormData("")
        e.target.form.style.display = "none"
        e.target.parentElement.parentElement.firstChild.firstChild.innerText = "Edit Date"
    }

    return(
        <div>
            <EditAndDeleteDateButtons
                day={day}
                daysWithFoods={daysWithFoods}
                onSetDaysWithFoods={onSetDaysWithFoods}
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
