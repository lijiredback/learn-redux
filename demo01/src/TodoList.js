import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const dataList = [
    '健身',
    '10点学习',
    '12点做饭'
]

class TodoList extends Component {
    render() {
        return (
            <div style={{ margin: '10px'}}>
                <div>
                    <Input 
                        style={{ width: '300px', marginRight: '10px' }} 
                        placeholder="请填写内容"
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                <List 
                    bordered
                    dataSource={ dataList }
                    renderItem={ item => (<List.Item>{ item }</List.Item>) }
                />
                </div>
            </div>
        )
    }
}

export default TodoList