import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    daysWithFoods,
    handleSetFoods,
    editFoodFormData,
    setEditFoodFormData,
    handleDeleteFoodSubmit
}) {
    

    return (
        <div className="food-list">
            {day.foods.map(food => (
                <FoodListing
                    food={food}
                    daysWithFoods={daysWithFoods}
                    handleSetFoods={handleSetFoods}
                    editFoodFormData={editFoodFormData}
                    setEditFoodFormData={setEditFoodFormData}
                    handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                />
            ))}
        </div>
    )
}

export default FoodList;
