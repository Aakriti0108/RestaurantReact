import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
const Dummy_Meals = [
    {
       id:'m1',
       name:'Sushi',
       description:'Finest Fish and Veggies',
       price:22.99
    },
    {
        id:'m2',
        name:'Schnitzel',
        description:'A german specialty',
        price:16.5
     },
     {
        id:'m3',
        name:'Barbecue Burger',
        description:'American, raw,meaty',
        price:22.99
     },
     {
        id:'m4',
        name:'Green Bowl',
        description:'Healthy ... and green ..',
        price:22.99
     }
]

const AvailableMeals = () =>{
    const mealsList = Dummy_Meals.map(meal =>{
        return(
            <MealItem key= {meal.id}  name={meal.name} description={meal.description}  price={meal.price}/>
        )
    });
    return (
      <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
      </section>
    )
}

export default AvailableMeals