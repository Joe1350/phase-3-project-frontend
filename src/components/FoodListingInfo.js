import React from "react";

function FoodListingInfo({ food }) {
    return (
        <div>
            Calories: {food.calories}
            <br></br>
            Fat: {food.fat} grams
            <br></br>
            Fiber: {food.fiber} grams
            <br></br>
            WW Points: {Math.round(food.calories/50+(food.fat-food.fiber)/12)}
        </div>
    )
}

export default FoodListingInfo;
