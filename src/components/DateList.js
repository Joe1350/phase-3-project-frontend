import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    displayEditDateForm,
    handleDeleteDateClick,
    handleEditDateFormChange,
    handleEditDateSubmit,
    handleDeleteFoodSubmit,
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
                displayEditDateForm={displayEditDateForm}
                handleDeleteDateClick={handleDeleteDateClick}
                handleEditDateFormChange={handleEditDateFormChange}
                handleEditDateSubmit={handleEditDateSubmit}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
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
