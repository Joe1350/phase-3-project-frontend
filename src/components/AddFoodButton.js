import React from "react";

function AddFoodButton({ displayAddFoodFormClick }) {
    return(
        <button
                id="displayAddFoodForm"
                onClick={displayAddFoodFormClick}
              >
                Add Food
              </button>
    )
}

export default AddFoodButton