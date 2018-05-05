import { getList } from "./action";

export interface IHello {
    list: number[];
}

interface IF {
    (params: number[]): IHello;
}


export interface IDisp {
    getList: any;
    setList: IF
}