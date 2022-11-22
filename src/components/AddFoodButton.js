import React from "react";

function AddFoodButton() {
    function displayAddFoodFormClick(e) {
        const x = e.target.previousSibling
    
        if (x.style.display === "none") {
            x.style.display = "block"
            e.target.innerText = "Hide Form"
        } else {
            x.style.display = "none"
            e.target.innerText = "Add Food"
        }
    }

    return(
        <button
            id="displayAddFoodForm"
            onClick={displayAddFoodFormClick}
        >
            Add Food
        </button>
    )
}

export default AddFoodButton;
