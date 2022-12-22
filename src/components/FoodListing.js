import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    day,
    days,
    onSetDays
}) {
    return (
        <div>
            <h3>
                {food.name}
            </h3>
            <EditFoodForm
                food={food}
                day={day}
                days={days}
                onSetDays={onSetDays}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
