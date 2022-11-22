import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    daysWithFoods,
    setEditFoodFormData,
    handleDeleteFoodSubmit,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange
}) {
    

    return (
        <div className="food-list">
            {day.foods.map(food => (
                    <FoodListing
                    food={food}
                    daysWithFoods={daysWithFoods}
                    setEditFoodFormData={setEditFoodFormData}
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
