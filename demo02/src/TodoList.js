import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.addToList = this.addToList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // redux 订阅
        store.subscribe(this.storeChange)
    }


    render() {
        return (
            <TodoListUI inputValue={ this.state.inputValue }
                        changeInputValue= { this.changeInputValue }
                        addToList = { this.addToList }
                        dataList = { this.state.dataList }
                        deleteItem = { this.deleteItem }
            />
        )
    }

    changeInputValue(e) {
        // 1.此时组件中的改变已经监听到了
        console.log(e.target.value);
        // 2.需要一个 action，是一个对象
        const action = changeInputAction(e.target.value);
        // 3.更新到 store
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState());
    }

    addToList() {
        const action = addItemAction(this.state.inputValue)
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action);
    }
}

export default TodoList