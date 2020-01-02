import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px'}}>
            <div>
                <Input 
                    style={{ width: '300px', marginRight: '10px' }} 
                    placeholder={ props.inputValue }
                    onChange={ props.changeInputValue }
                    value={ props.inputValue }
                />
                <Button type="primary" onClick= { props.addToList }>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
            <List 
                bordered
                dataSource={ props.dataList }
                renderItem={ (item,index) => (<List.Item onClick={ () => { props.deleteItem(index) } }>{ item }</List.Item>) }
            />
            </div>
        </div>
    )
}

export default TodoListUI