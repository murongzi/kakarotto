interface IAddTodo {
    count: number;
}

export interface IA {
    text: IAddTodo
}

export interface IStateStore {
    text:IAddTodo
}

interface IDispatchProps {
    addTodo?: any
}

export interface IComponmentProps extends IStateStore, IDispatchProps  {
    
}
