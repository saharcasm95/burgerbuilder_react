import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from "./SideDrawer.css"
import Wrapper from '../../../hoc/Wrapper';
const sideDrawer = () => {
    return (
        <Wrapper>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>

        </Wrapper>

    );
};

export default sideDrawer;