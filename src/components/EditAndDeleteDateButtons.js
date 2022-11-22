import React from "react";

function EditAndDeleteDateButtons({
    day,
    displayEditDateForm,
    handleDeleteDateClick
}) {
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
