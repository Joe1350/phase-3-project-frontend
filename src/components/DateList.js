import React from "react";
import DateListing from "./DateListing"

function DateList({
    daysWithFoods,
    onSetDaysWithFoods,
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
                    />
                )
            })}
        </div>
    )
}

export default DateList;
