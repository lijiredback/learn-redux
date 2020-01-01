import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px'}}>
                <div>
                    <Input 
                        style={{ width: '300px', marginRight: '10px' }} 
                        placeholder={ this.props.inputValue }
                        onChange={ this.props.changeInputValue }
                        value={ this.props.inputValue }
                    />
                    <Button type="primary" onClick= { this.props.addToList }>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                <List 
                    bordered
                    dataSource={ this.props.dataList }
                    renderItem={ (item,index) => (<List.Item onClick={ () => { this.props.deleteItem(index) } }>{ item }</List.Item>) }
                />
                </div>
            </div>
        )
    }
}

export default TodoListUI