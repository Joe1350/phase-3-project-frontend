import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    handleDeleteDateClick,
    handleEditDateFormChange,
    handleEditDateSubmit,
    handleSetFoods,
    editFoodFormData,
    setEditFoodFormData,
    editDateFormData,
    setEditDateFormData
}) {
    

    return(
        <div className="date-list">
        {daysWithFoods.map((day) => (
            <DateListing
                day={day}
                daysWithFoods={daysWithFoods}
                handleDeleteDateClick={handleDeleteDateClick}
                handleEditDateFormChange={handleEditDateFormChange}
                handleEditDateSubmit={handleEditDateSubmit}
                handleSetFoods={handleSetFoods}
                editFoodFormData={editFoodFormData}
                setEditFoodFormData={setEditFoodFormData}
                editDateFormData={editDateFormData}
                setEditDateFormData={setEditDateFormData}
            />
        ))}
      </div>
    )
}

export default DateList;
