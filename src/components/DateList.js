import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    handleClickOnDate,
    displayEditDateForm,
    handleDeleteDateClick,
    handleEditDateFormChange,
    handleEditDateSubmit,
    displayEditFoodForm,
    handleDeleteFoodSubmit,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange,
    handleSetFoods,
    editDateFormData
}) {
    return(
        <div className="date-list">
        {daysWithFoods.map((day) => (
            <DateListing
                day={day}
                daysWithFoods={daysWithFoods}
                handleClickOnDate={handleClickOnDate}
                displayEditDateForm={displayEditDateForm}
                handleDeleteDateClick={handleDeleteDateClick}
                handleEditDateFormChange={handleEditDateFormChange}
                handleEditDateSubmit={handleEditDateSubmit}
                displayEditFoodForm={displayEditFoodForm}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                handleEditFoodFormChange={handleEditFoodFormChange}
                handleSetFoods={handleSetFoods}
                editDateFormData={editDateFormData}
            />
        ))}
      </div>
    )
}

export default DateList;
