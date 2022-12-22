import React from "react";

function EditAndDeleteDateButtons({
    day,
    days,
    onSetDays
}) {

    function displayEditDateFormClick(e) {
        const x = e.target.parentElement.parentElement.children[1]
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

    function handleDeleteDateClick() {
        fetch(`http://localhost:9292/days/${day.id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => {
                const updatedDays = days.filter(d => day.id !== d.id)
                onSetDays(updatedDays)
            })
    }

    return(
        <div>
            <button
                onClick={displayEditDateFormClick}
            >
                Edit Date
            </button>
            <button
                onClick={handleDeleteDateClick}
            >
                Delete Date
            </button>
        </div>
    )
}

export default EditAndDeleteDateButtons;
