import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    daysWithFoods,
    handleSetFoods,
    editFoodFormData,
    setEditFoodFormData,
    handleDeleteFoodSubmit
}) {
    

    return (
        <div key={food.id}>
            <h3>
                {food.name}
            </h3>
            <EditFoodForm
                food={food}
                daysWithFoods={daysWithFoods}
                handleSetFoods={handleSetFoods}
                editFoodFormData={editFoodFormData}
                setEditFoodFormData={setEditFoodFormData}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
