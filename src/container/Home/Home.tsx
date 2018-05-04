import './styles.scss';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from './action';
import { IStateStore, IComponmentProps} from './interface';
import { IRootStore } from '../../IRootState';

const mapStateToProps = (state: IRootStore/* , ownProps: IComponmentProps */) => {
    return {
        text: state.HomeReducer.text
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>/* , ownProps: IComponmentProps */) => {
    return {
        addTodo: (params) => {
            dispatch(addTodo(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(class HomeComponment extends React.Component<IComponmentProps> {
    constructor(props: IComponmentProps, context) {
        super(props, context)
    }

    onClick = () => {
        this.props.addTodo({ count: this.props.text.count + 1 });
    }

    render() {
        return (
            <div className="home">
                <div>this is home page</div>
                <div>
                    <button onClick={this.onClick}>Click Me!</button>
                </div>
                <div>{this.props.text.count}</div>

                <a></a>

            </div>
        )
    }
});
