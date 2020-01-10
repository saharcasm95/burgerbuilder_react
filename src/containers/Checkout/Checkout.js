import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 0

    };
    checkoutCancelled = () => {
        this.props.history.goBack();
    };
    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');

    };

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCancelled={this.checkoutCancelled}
                                 checkoutContinued={this.checkoutContinued}/>

                <Route path={this.props.match.url + '/contact-data'}
                       render={()=> (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/> )}/>

            </div>
        )
    }
}

export default Checkout;