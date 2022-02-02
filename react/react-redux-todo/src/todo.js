/**
 * @file todo页面
 * @author zhaoyadong
 */
import React, { PureComponent } from 'react';
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

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        store.subscribe(this.storeChange);
    }
    render() {
        return (
            <div style={{ margin: '10px', width: '600px' }}>
                <h1>React and Redux TodoList</h1>
                <div style={{ marginBottom: '10px' }}>
                    <Input
                        placeholder={this.state.inputValue}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }} />
                    <Button color="primary" variant="contained" startIcon={<SaveIcon />} onClick={this.handleClick}>增加</Button>
                    <Button color="secondary" variant="contained" onClick={this.handleMockData}>Mock数据</Button>
                </div>
                <List>
                    {
                        this.state.list.map((item, index) => {
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
                                        <IconButton edge="end" aria-label="delete" onClick={() => this.deleteItem(index)}>
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

    handleMockData = () => {
        this.setState({ loading: true })
        const action = getTodoList(() => this.setState({ loading: false }));
        store.dispatch(action);
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    storeChange = () => {
        const action = store.getState();
        this.setState(action);
    }

    handleClick = () => {
        const action = addItemAction();
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;
