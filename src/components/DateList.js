import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    onSetDaysWithFoods,
    editFoodFormData,
    setEditFoodFormData,
    editDateFormData,
    setEditDateFormData
}) {
    return(
        <div className="date-list">
        {daysWithFoods.map((day) => (
            <DateListing
                key={day.id}
                day={day}
                daysWithFoods={daysWithFoods}
                onSetDaysWithFoods={onSetDaysWithFoods}
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
