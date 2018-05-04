import { IStateStore } from './container/Home/interface';
import {IHello} from './container/Hello/interface';

export interface IRootStore {
    HomeReducer: IStateStore;
    HelloReducer: IHello;
}