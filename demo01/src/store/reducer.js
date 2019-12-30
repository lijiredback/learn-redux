const defaultState = {
    inputValue: '请填写',
    dataList: [
        '10点起床',
        '11点干活',
        '12点吃饭'
    ]
};

export default (state = defaultState, action) => {
    // console.log(state, action);

    // 4. reducer 处理 state
    // reducer 中只能接受 state，不能改变 state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState.inputValue = action.value;
        console.log('走了1');
        return newState;
    }
    console.log('走了2');
    return state
}