import React, {Component} from 'react';
import classes from './Modal.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate(){
        console.log("modal updates");
    }
    render(){
        return (
            <Wrapper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style = {
                         {
                             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                             opacity: this.props.show ? '1' : '0'
                         }
                     }
                >
                    {this.props.children}
                </div>
            </Wrapper>
        )

    }

};

export default modal;