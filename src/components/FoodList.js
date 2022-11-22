import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    displayEditFoodForm,
    handleDeleteFoodSubmit,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange
}) {
    return (
        <div className="food-list">
            {day.foods.map(food => (
                    <FoodListing
                    food={food}
                    displayEditFoodForm={displayEditFoodForm}
                    handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                    handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                    handleEditFoodFormChange={handleEditFoodFormChange}
                    />
                  ))
                }
        </div>
    )
}

export default FoodList;
