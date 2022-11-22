import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    daysWithFoods,
    onSetDaysWithFoods,
    editFoodFormData,
    setEditFoodFormData
}) {
    return (
        <div className="food-list">
            {day.foods.map(food => (
                <FoodListing
                    key={food.id}
                    food={food}
                    daysWithFoods={daysWithFoods}
                    onSetDaysWithFoods={onSetDaysWithFoods}
                    editFoodFormData={editFoodFormData}
                    setEditFoodFormData={setEditFoodFormData}
                />
            ))}
        </div>
    )
}

export default FoodList;
