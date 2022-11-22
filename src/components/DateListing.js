import React from "react";
import AddFoodForm from "./AddFoodForm";
import EditDateForm from "./EditDateForm";
import FoodList from "./FoodList";

function DateListing({
    day,
    editFoodFormData,
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
}) {
    return(
        <div id="date-listing" key={day.id}>
            <h2 id="date" 
              onClick={handleClickOnDate}
            >
              {day.date}
            </h2>
            <div id={day.date} style={{ display: "none" }}>
              <EditDateForm
                day={day}
                handleEditDateFormChange={handleEditDateFormChange}
                handleEditDateSubmit={handleEditDateSubmit}
                displayEditDateForm={displayEditDateForm}
                handleDeleteDateClick={handleDeleteDateClick}
              />
              <FoodList
                day={day}
                editFoodFormData={editFoodFormData}
                displayEditFoodForm={displayEditFoodForm}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                handleEditFoodFormChange={handleEditFoodFormChange}
              />
              <AddFoodForm
                day={day}
                daysWithFoods={daysWithFoods}
                onSetFoods={handleSetFoods}
              />
            </div>
          </div>
    )
}

export default DateListing;
