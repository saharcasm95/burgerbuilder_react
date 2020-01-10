import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { withRouter } from 'react-router-dom'

const burger = (props) => {

    let ingredientsArray = Object.keys(props.ingredients)
        .map(i => {
            return [...Array(props.ingredients[i])].map((_, index) => {
                return <BurgerIngredient key={i + index} type={i}/>
            })
        })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);

    let ingredients = ingredientsArray.length <= 0 ? <p>Add ingredients to order!</p> : ingredientsArray;

    return (


        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    )
};

export default withRouter(burger);