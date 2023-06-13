import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";

const DumyMeals = [
    {
        id: "m1",
        name: "Spaghetti",
        description: "Finest Chicken and Vegies",
        price: 22.09,
    },
    {
        id: "m2",
        name: "Burger",
        description: "Juicy Beef Patty with Cheese",
        price: 12.99,
    },
    {
        id: "m3",
        name: "Salad",
        description: "Fresh Greens with Balsamic Dressing",
        price: 8.99,
    },
    {
        id: "m4",
        name: "Pizza",
        description: "Delicious Combination of Toppings",
        price: 16.49,
    }
];


const AvailableMeal = () => {
    const mealsList = DumyMeals.map((meal) => 
    <MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description = {meal.description} 
    price={meal.price}
    />)
    return (
        <>
            <section>
                <Card>
                    <ul>
                        {mealsList}
                    </ul>
                </Card>
            </section>
        </>
    )
}

export default AvailableMeal
