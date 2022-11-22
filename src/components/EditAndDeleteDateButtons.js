import React from "react";

function EditAndDeleteDateButtons({
    day,
    handleDeleteDateClick
}) {
    function displayEditDateForm(e) {
        const x = document.getElementById(e.target.className)
    
        if (x.style.display === "none") {
            x.style.display = "block"
            e.target.innerText = "Hide Form"
        } else {
            x.style.display = "none"
            e.target.innerText = "Edit Date"
        }
    }

    return(
        <div>
            <button
                className={`${day.id}_${day.date}`}
                onClick={displayEditDateForm}
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
