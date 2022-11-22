import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    onSetDaysWithFoods,
    editFoodFormData,
    setEditFoodFormData,
}) {
    return(
        <div className="date-list">
            {daysWithFoods.map(day => {
                return (
                    <DateListing
                        key={day.id}
                        day={day}
                        daysWithFoods={daysWithFoods}
                        onSetDaysWithFoods={onSetDaysWithFoods}
                        editFoodFormData={editFoodFormData}
                        setEditFoodFormData={setEditFoodFormData}
                    />
                )
            })}
        </div>
    )
}

export default DateList;
