import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Roll "Naomi"',
    description:
      "Philadelphia Cheese, Chicken Fillet, Masago, Tomato, Cucumber, Sesame Seeds",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spicy Salmon",
    description: "Rice, Salmon, Spicy Sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Eel Sushi",
    description: "Smoked Eel, Unagi Sauce, Sesame Seeds",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salmon Poke Salad',
    description:
      "Rice, Salmon, Cucumber, Tobiko, Nori, Tuna Flakes, Nut Sauce",
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
