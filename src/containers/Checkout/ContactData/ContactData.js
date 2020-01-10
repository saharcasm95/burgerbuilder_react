import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import {withRouter} from 'react-router-dom';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Testing',
                address: {
                    street: 'test street 1',
                    zipCode: '1234',
                    country: 'Test country',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Test Method'
        };
        console.log(order);
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error)
            });


    }
    render(){

        let form =(
            <form>
                <input type="text" name="name" placeholder="Your name"/>
                <input type="email" name="email" placeholder="Your email"/>
                <input type="text" name="street" placeholder="Your Street"/>
                <input type="text" name="postal" placeholder="Your Postal Code"/>
                <Button btnType="Success"
                        clicked = {this.orderHandler}>Order
                </Button>
            </form>);

        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>

        );
    }
}

export default withRouter(ContactData);