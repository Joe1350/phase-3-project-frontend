import React from "react";
import AddFoodForm from "./AddFoodForm";
import EditDateForm from "./EditDateForm";
import FoodList from "./FoodList";

function DateListing({
    day,
    days,
    onSetDays,
}) {
    function handleClickOnDate(e) {
        const date = e.target.parentElement.innerHTML.split("<")[0]
        const x = document.getElementById(date)
    
        if (x.style.display === "none") {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    }

    return(
        <div id="date-listing">
            <h2 id="date" 
                // onClick={handleClickOnDate}
            >
                {day.date}
                <button id="date-details-button" onClick={handleClickOnDate}>see more info</button>
            </h2>
            <div id={day.date} style={{ display: "none" }}>
                <EditDateForm
                    day={day}
                    days={days}
                    onSetDays={onSetDays}
                />
                <FoodList
                    day={day}
                    days={days}
                    onSetDays={onSetDays}
                />
                <AddFoodForm
                    day={day}
                    days={days}
                    onSetDays={onSetDays}
                />
            </div>
        </div>
    )
}

export default DateListing;
