import React, { useState, useEffect } from 'react';
import './MealList.css';

const MealList = () => {
    const [Meals, setMeals] = useState([]);
    const url = 'http://localhost:3000/all-meals';

    const fetchData = async() => {        
        try {
            const request = await fetch(url)
            const response = await request.json()
            setMeals(response);                
        } catch (error) {
            throw error                
        }};

    useEffect(() => {
        fetchData()
    }, []);
    
    console.log(Meals);


    return ( 
        <div className="MealList_container">
            <div className="MealList_body">
                <h1>Meals List</h1>
                <div className="MealDetail_container">
                    {Meals.map(meal => (
                    <div className="MealCard_container">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <p className="MealPrice">{meal.price} DKK</p>
                    </div>))}          
                </div>  
            </div>
        </div>
     );
}
 
export default MealList;
