import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        // redux 订阅
        store.subscribe(this.storeChange)
    }


    render() {
        return (
            <div style={{ margin: '10px'}}>
                <div>
                    <Input 
                        style={{ width: '300px', marginRight: '10px' }} 
                        placeholder={ this.state.inputValue }
                        onChange={ this.changeInputValue }
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                <List 
                    bordered
                    dataSource={ this.state.dataList }
                    renderItem={ item => (<List.Item>{ item }</List.Item>) }
                />
                </div>
            </div>
        )
    }

    changeInputValue(e) {
        // 1.此时组件中的改变已经监听到了
        console.log(e.target.value);
        // 2.需要一个 action，是一个对象
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        // 3.更新到 store
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState());
    }
}

export default TodoList