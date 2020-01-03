import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(iKey => {
            return (
                <li key={iKey}>
                    <span>{iKey}</span>:{props.ingredients[iKey]}
                </li>)
        });

    return(
        <Wrapper>
            <h3>Your Order</h3>
            <p>Burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price is: ${props.totalPrice.toFixed(2)} </p>
            <p>Continue to checkout?</p>
            <Button clicked = {props.purchaseContinued} btnType = {'Success'} >Continue</Button>
            <Button clicked = {props.purchaseCancelled} btnType = {'Danger'} >Cancel</Button>
        </Wrapper>

    )
}

export default orderSummary;