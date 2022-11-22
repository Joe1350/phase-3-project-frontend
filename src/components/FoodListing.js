import React from "react";
import EditFoodForm from "./EditFoodForm";
import FoodListingInfo from "./FoodListingInfo";

function FoodListing({
    food,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange,
    displayEditFoodForm,
    handleDeleteFoodSubmit
}) {
    return (
        <div key={food.id}>
                      <h3>
                        {food.name}
                      </h3>
                      <EditFoodForm
                        food={food}
                        handleEditFoodFormSubmit={handleEditFoodFormSubmit}
                        handleEditFoodFormChange={handleEditFoodFormChange}
                        displayEditFoodForm={displayEditFoodForm}
                        handleDeleteFoodSubmit={handleDeleteFoodSubmit}
                      />
                      <FoodListingInfo food={food} />
                    </div>
    )
}

export default FoodListing;
