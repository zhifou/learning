import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Son from './son';

class Parent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div>这个是个父组件，并且是个纯组件</div>
                <ul>
                    {
                        this.props.todoList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Son cid={item.cid} title={item.title}></Son>
                                </li>
                            )
                        })
                        
                    }
                </ul>
            </Fragment>
        );
    }
}

Parent.propTypes = {
    todoList: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired
}

Parent.defaultProps = {
    todoList: [],
    removeTodo: () => {}
}

export default Parent;