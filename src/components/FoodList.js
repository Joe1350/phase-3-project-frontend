import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    daysWithFoods,
    onSetDaysWithFoods,
}) {
    return (
        <div className="food-list">
            {day.foods.map(food => (
                <FoodListing
                    key={food.id}
                    food={food}
                    daysWithFoods={daysWithFoods}
                    onSetDaysWithFoods={onSetDaysWithFoods}
                />
            ))}
        </div>
    )
}

export default FoodList;
