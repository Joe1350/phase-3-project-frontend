import React from "react";
import FoodListing from "./FoodListing";

function FoodList({
    day,
    days,
    onSetDays
}) {
    return (
        <div className="food-list">
            {day.foods.map(food => (
                <FoodListing
                    key={food.id}
                    food={food}
                    day={day}
                    days={days}
                    onSetDays={onSetDays}
                />
            ))}
        </div>
    )
}

export default FoodList;
