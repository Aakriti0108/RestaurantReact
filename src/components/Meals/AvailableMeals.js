import classes from './AvailableMeals.module.css'
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
            <li>{meal.name}</li>
        )
    });
    return (
      <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
      </section>
    )
}

export default AvailableMeals