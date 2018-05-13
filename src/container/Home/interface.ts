interface IAddTodo {
    count: number;
}

export interface IA {
    text: IAddTodo
}
export interface IList {
    name: string;
    age: number;
}

export interface IStateStore {
    text:IAddTodo,
    list: IList[]
}

interface IDispatchProps {
    addTodo?: any,
    dispatch?: any
}

export interface IComponmentProps extends IStateStore, IDispatchProps  {
}
