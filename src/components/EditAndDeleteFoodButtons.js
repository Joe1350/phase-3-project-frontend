import React from "react";

function EditAndDeleteFoodButtons({
    food,
    displayEditFoodForm,
    handleDeleteFoodSubmit
}) {
    return(
        <div>
            <button
                        className={food.id}
                        onClick={displayEditFoodForm}
                      >
                        Edit Food
                      </button>
                      <button
                        className={food.id}
                        onClick={handleDeleteFoodSubmit}
                      >
                        Delete Food
                      </button>
        </div>
    )
}

export default EditAndDeleteFoodButtons;
