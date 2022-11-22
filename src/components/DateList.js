import React from "react";
import DateListing from "./DateListing"

function DateList({
    days,
    onSetDays,
}) {
    return(
        <div className="date-list">
            {days.map(day => {
                return (
                    <DateListing
                        key={day.id}
                        day={day}
                        days={days}
                        onSetDays={onSetDays}
                    />
                )
            })}
        </div>
    )
}

export default DateList;
