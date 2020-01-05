import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    salad: 0.2,
    meat: 0.9
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };


    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(iKey => {
                return ingredients[iKey];
            })
            .reduce((sum, el) =>{
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0})
    }
    addIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {

        if(this.state.ingredients[type] <= 0) return;

        const updatedIngredients = { ...this.state.ingredients };
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert("Continue purchase");
    }

    render() {

        let disabledControls = {...this.state.ingredients};
        for(let key in disabledControls){
            disabledControls[key] = disabledControls[key] <=0;
        }

        return (
            <Wrapper>

                <Modal show={this.state.purchasing} modalClosed ={this.purchaseCancelHandler} >
                    <OrderSummary ingredients = {this.state.ingredients}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}
                                  totalPrice = {this.state.totalPrice}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients} />

                <BuildControls ingredientAdded = {this.addIngredientHandler}
                               ingredientRemoved = {this.removeIngredientHandler}
                               disabledControls = {disabledControls}
                               price = {this.state.totalPrice}
                               purchasable = {this.state.purchasable}
                               ordered = {this.purchaseHandler}

                />
            </Wrapper>
        );
    }
}

export  default  BurgerBuilder;