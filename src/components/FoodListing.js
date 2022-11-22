import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    daysWithFoods,
    editFoodFormData,
    setEditFoodFormData,
    handleEditFoodFormSubmit,
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
                editFoodFormData={editFoodFormData}
                setEditFoodFormData={setEditFoodFormData}
                handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
