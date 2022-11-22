import React from "react";
import AddFoodForm from "./AddFoodForm";
import EditDateForm from "./EditDateForm";
import FoodList from "./FoodList";

function DateListing({
    day,
    editFoodFormData,
    setEditFoodFormData,
    daysWithFoods,
    handleDeleteDateClick,
    handleEditDateFormChange,
    handleEditDateSubmit,
    handleSetFoods,
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
                    handleDeleteDateClick={handleDeleteDateClick}
                />
                <FoodList
                    day={day}
                    daysWithFoods={daysWithFoods}
                    handleSetFoods={handleSetFoods}
                    editFoodFormData={editFoodFormData}
                    setEditFoodFormData={setEditFoodFormData}
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
