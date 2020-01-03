import React from 'react'
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabledControls[ctrl.type]}
            />
        ))}
        <button disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}>Order Now</button>
    </div>
);


export default buildControls;