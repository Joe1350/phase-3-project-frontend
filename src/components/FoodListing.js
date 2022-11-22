import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    daysWithFoods,
    onSetDaysWithFoods
}) {
    return (
        <div>
            <h3>
                {food.name}
            </h3>
            <EditFoodForm
                food={food}
                daysWithFoods={daysWithFoods}
                onSetDaysWithFoods={onSetDaysWithFoods}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
