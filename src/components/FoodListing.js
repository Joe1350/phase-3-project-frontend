import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    daysWithFoods,
    setEditFoodFormData,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange,
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
                setEditFoodFormData={setEditFoodFormData}
                handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                handleEditFoodFormChange={handleEditFoodFormChange}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
            />
            <FoodListingInfo food={food} />
        </div>
    )
}

export default FoodListing;
