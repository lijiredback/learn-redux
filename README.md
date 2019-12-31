# learn-redux
just some demos, foundation of redux

## demo01

+ antd
+ redux的基本用法：store, reducer...
+ Input 中使用 redux 的流程
    - 组件更新
    - 创建 action
    - store.dispatch(action)
    - reducer (不能改变 state)
    - 订阅 store.subscribe()
+ 技巧：将 actionTypes 抽离一个组件，方便复用
+ 注意：
    - store 必须唯一
    - 只有 store 能改变state，reducer 不行
    - reducer 必须是一个纯函数（返回值必须由参数决定，也就是其中不能发送 ajax 请求）