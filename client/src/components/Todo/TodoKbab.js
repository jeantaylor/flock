/// Import Libraries
import React, { Component } from 'react';

/// Import Assets 
import kbab from '../../assets/icons/SVG/kebab-icon.svg'; 

export default class TodoKbab extends Component {
    state = {
        kbabActive: false
    }

    toggle = () => {
        if (this.state.kbabActive === false) {
            this.setState({kbabActive: true})
        } else {
            this.setState({kbabActive: false})
        }
    }

    render() {
        return (
            <div className = 'kbabMenu'>
                <button 
                    className = 'kbabMenu__btn'
                    type = 'button' 
                    onClick = {this.toggle}
                >
                    <img 
                        className = 'kbabMenu__icon' 
                        src = {kbab} 
                        alt = 'Kebab button icon'
                    />
                </button>
                {
                    this.state.kbabActive 
                    && 
                        <div className = 'kbabMenu__actions'>
                            <button 
                                className = 'kbabMenu__action' 
                                id = {this.props.id} 
                            >
                                Delete
                            </button>
                            <button 
                                className = 'kbabMenu__action' 
                                id = {this.props.id} 
                            >
                                Set Cancelled
                            </button>
                        </div>
                }
            </div>
        )
    }
}
