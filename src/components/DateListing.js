import React from "react";
import AddFoodForm from "./AddFoodForm";
import EditDateForm from "./EditDateForm";
import FoodList from "./FoodList";

function DateListing({
    day,
    editFoodFormData,
    setEditFoodFormData,
    daysWithFoods,
    onSetDaysWithFoods,
}) {
    function handleClickOnDate(e) {
        const date = e.target.innerHTML
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
                onClick={handleClickOnDate}
            >
                {day.date}
            </h2>
            <div id={day.date} style={{ display: "none" }}>
                <EditDateForm
                    day={day}
                    daysWithFoods={daysWithFoods}
                    onSetDaysWithFoods={onSetDaysWithFoods}
                />
                <FoodList
                    day={day}
                    daysWithFoods={daysWithFoods}
                    onSetDaysWithFoods={onSetDaysWithFoods}
                    editFoodFormData={editFoodFormData}
                    setEditFoodFormData={setEditFoodFormData}
                />
                <AddFoodForm
                    day={day}
                    daysWithFoods={daysWithFoods}
                    onSetDaysWithFoods={onSetDaysWithFoods}
                />
            </div>
        </div>
    )
}

export default DateListing;
