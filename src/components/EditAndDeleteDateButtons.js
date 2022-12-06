import React from "react";

function EditAndDeleteDateButtons({
    day,
    days,
    onSetDays
}) {
    function displayEditDateFormClick(e) {
        const x = document.getElementById(e.target.className)
        const y = x.children
    
        if (x.style.display === "none") {
            x.style.display = "block"
            e.target.innerText = "Hide Form"
            y[0].children[0].value = day.date
        } else {
            x.style.display = "none"
            e.target.innerText = "Edit Date"
        }
    }

    function handleDeleteDateClick(e) {
        const dayId = e.target.className.split("_")[1]
        const updatedDays = days.filter(day => (
            day.id == dayId ? null : day
        ))
    
        fetch(`http://localhost:9292/days/${dayId}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => onSetDays(updatedDays))
    }

    return(
        <div>
            <button
                className={`${day.id}_${day.date}`}
                onClick={displayEditDateFormClick}
            >
                Edit Date
            </button>
            <button
                className={`${day.date}_${day.id}`}
                onClick={handleDeleteDateClick}
            >
                Delete Date
            </button>
        </div>
    )
}

export default EditAndDeleteDateButtons;
