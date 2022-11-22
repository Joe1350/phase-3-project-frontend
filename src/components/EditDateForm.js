import React from "react";
import EditAndDeleteDateButtons from "./EditAndDeleteDateButtons";

function EditDateForm({
    day,
    handleEditDateFormChange,
    editDateFormData,
    handleEditDateSubmit,
    displayEditDateForm,
    handleDeleteDateClick
}) {
    return(
        <div>
            <EditAndDeleteDateButtons
                day={day}
                displayEditDateForm={displayEditDateForm}
                handleDeleteDateClick={handleDeleteDateClick}
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
