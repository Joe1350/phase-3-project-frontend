import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    daysWithFoods,
    editFoodFormData,
    setEditFoodFormData,
    handleDeleteFoodSubmit,
    handleEditFoodFormSubmit
}) {
    

    return (
        <div className="food-list">
            {day.foods.map(food => (
                <FoodListing
                    food={food}
                    daysWithFoods={daysWithFoods}
                    editFoodFormData={editFoodFormData}
                    setEditFoodFormData={setEditFoodFormData}
                    handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                    handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                />
            ))}
        </div>
    )
}

export default FoodList;
