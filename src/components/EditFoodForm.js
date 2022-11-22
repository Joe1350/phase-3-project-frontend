import React from "react";
import EditAndDeleteFoodButtons from "./EditAndDeleteFoodButtons";

function EditFoodForm({
    food,
    daysWithFoods,
    setEditFoodFormData,
    handleEditFoodFormSubmit,
    handleEditFoodFormChange,
    handleDeleteFoodSubmit
}) {
    

    return (
        <div>
            <EditAndDeleteFoodButtons
                food={food}
                daysWithFoods={daysWithFoods}
                setEditFoodFormData={setEditFoodFormData}
                handleDeleteFoodSubmit={handleDeleteFoodSubmit}
            />
            <form
                id={food.id}
                className={food.day_id}
                style={{ display: "none" }}
                onSubmit={handleEditFoodFormSubmit}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        className="name"
                        onChange={handleEditFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        className="calories"
                        onChange={handleEditFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fat:
                    <input
                        type="number"
                        name="fat"
                        className="fat"
                        onChange={handleEditFoodFormChange}
                    />
                </label>
                <br></br>
                <label>
                    Fiber:
                    <input
                        type="number"
                        name="fiber"
                        className="fiber"
                        onChange={handleEditFoodFormChange}
                    />
                </label>
                <br></br>
                <button type="submit">Update Food</button>
            </form>
        </div>
    )
}

export default EditFoodForm;
