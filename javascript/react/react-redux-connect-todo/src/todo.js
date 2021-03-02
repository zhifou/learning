/**
 * @file todo页面
 * @author zhaoyadong
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Avatar, Input, Button, List, ListItem, ListItemText, ListItemAvatar,
        ListItemSecondaryAction, IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import WorkIcon from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';
import store from './store';
import {
    getTodoList,
    changeInputAction,
    addItemAction,
    deleteItemAction
} from './store/actions';
import withStorage from './hoc/withStorage';

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        const {handleMockData, handleClick, deleteItem, changeInputValue} = this.props;
        const {inputValue, list, todoList} = this.props;
        console.log(todoList);
        return (
            <div style={{ margin: '10px', width: '600px' }}>
                <h1>React and Redux TodoList</h1>
                <div style={{ marginBottom: '10px' }}>
                    <Input
                        placeholder={inputValue}
                        onChange={changeInputValue}
                        value={inputValue}
                        style={{ width: '250px', marginRight: '10px' }} />
                    <Button color="primary" variant="contained" startIcon={<SaveIcon />} onClick={handleClick}>增加</Button>
                    <Button color="secondary" variant="contained" onClick={() => handleMockData(() => {console.log('mock list got.')})}>Mock数据</Button>
                </div>
                <List>
                    {
                        list.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item}
                                        // secondary={secondary ? 'Secondary text' : null}
                                    >{item}</ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(index)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputAction(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = addItemAction();
            dispatch(action);
        },
        deleteItem(index) {
            const action = deleteItemAction(index);
            dispatch(action);
        },
        handleMockData(callback) {
            const action = getTodoList(callback);
            dispatch(action);
        }
    };
};

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default withStorage(Todo)('todoList');

