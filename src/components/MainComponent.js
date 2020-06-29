import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dishes : DISHES, 
            selectedDish: null  
        };
    }

    
    onSelectedDish(dishID) {
        this.setState({
            selectedDish: dishID
        });
    }

    render() {
        return (
            <div className='App'>
                <Navbar dark color="primary">
                    <div className="container">  <NavbarBrand href="/">
                            Restaurante con Fusion
                        </NavbarBrand>
                    </div >
                </Navbar>
                <Menu dishes = {this.state.dishes}
                    onClick={ (dishID) => this.onSelectedDish(dishID) }/>
                <Dishdetail dish= {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />                   
            </div >
        );
    }
}

export default Main;