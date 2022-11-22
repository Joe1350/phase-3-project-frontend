import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    displayEditDateForm,
    handleDeleteDateClick,
    handleEditDateFormChange,
    handleEditDateSubmit,
    handleDeleteFoodSubmit,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange,
    handleSetFoods,
    editDateFormData,
    setEditFoodFormData
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
                handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                handleEditFoodFormChange={handleEditFoodFormChange}
                handleSetFoods={handleSetFoods}
                editDateFormData={editDateFormData}
                setEditFoodFormData={setEditFoodFormData}
            />
        ))}
      </div>
    )
}

export default DateList;
