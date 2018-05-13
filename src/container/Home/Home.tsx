import './styles.scss';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo, getList } from './action';
import { IStateStore, IComponmentProps} from './interface';
import { IRootStore } from '../../IRootState';

import List from './List';

const mapStateToProps = (state: IRootStore/* , ownProps: IComponmentProps */) => {
    return {
        text: state.HomeReducer.text,
        list: state.HomeReducer.list
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<any, any>/* , ownProps: IComponmentProps */) => {
//     return {
//         addTodo: (params) => {
//             dispatch(addTodo(params))
//         }
//     }
// }

export default connect(mapStateToProps/* , mapDispatchToProps */)(class HomeComponment extends React.Component<IComponmentProps> {
    constructor(props: IComponmentProps, context) {
        super(props, context)
    }

    onClick = () => {
        this.props.dispatch(addTodo({ count: this.props.text.count + 1 }));
        /* this.props.addTodo({ count: this.props.text.count + 1 }); */
    }

    onGetData = () => {
        this.props.dispatch(getList());
    }

    render() {
        return (
            <div className="home">
                <div>this is home page</div>
                <div>
                    <button onClick={this.onClick}>Click Me!</button>
                </div>
                <div>{this.props.text.count}</div>

                <div>
                    <button onClick={this.onGetData}>get all the list data</button>
                    list 总数量：{this.props.list.length}
                    <List list={this.props.list}/>
                </div>
            </div>
        )
    }
});
