import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    daysWithFoods,
    onSetDaysWithFoods,
    editFoodFormData,
    setEditFoodFormData
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
                editFoodFormData={editFoodFormData}
                setEditFoodFormData={setEditFoodFormData}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
