import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    componentDidUpdate(){
        console.log("Order Summary updates");
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(iKey => {
                return (
                    <li key={iKey}>
                        <span>{iKey}</span>:{this.props.ingredients[iKey]}
                    </li>)
            });
        return(
            <Wrapper>
                <h3>Your Order</h3>
                <p>Burger with following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total price is: ${this.props.totalPrice.toFixed(2)} </p>
                <p>Continue to checkout?</p>
                <Button clicked = {this.props.purchaseContinued} btnType = {'Success'} >Continue</Button>
                <Button clicked = {this.props.purchaseCancelled} btnType = {'Danger'} >Cancel</Button>
            </Wrapper>

        )
    }

}

export default orderSummary;