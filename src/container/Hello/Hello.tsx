import * as React from 'react';
import './styles.scss';
import { getList, setList } from './action';
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import * as actions from './action';
import { IRootStore } from '../../IRootState';
import { IHello, IDisp } from './interface';


interface IHProps extends IRootStore, IDisp, IHello{

}

class HelloWorldComponent extends React.Component<IHProps> {
    constructor(props: IHProps) {
        super(props);
    }

    componentWillMount() {
        this.props.getList()
    }

    OnGetList = () => {
        this.props.getList()
    }

    OnClearList = () => {
        this.props.setList([8, 9, 10])
    }

    render() {
        return (
            <div className="hello">
                <div className="hello-title">这是Hello页</div>
                <div>
                    操作区：
                    <button onClick={this.OnGetList}>获取列表</button>
                    <button onClick={this.OnClearList}>清空列表</button>
                </div>
                <h3>显示区</h3>
                <div>
                    {
                        this.props.list.map((v, i) => <i key={i}>{v}</i>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IRootStore, ownProps: IHProps) => {
    return {
        list: state.HelloReducer.list
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any, any>, ownProps: IHProps) => {
    return {
        getList() {
            dispatch(actions.getList())
        },
        setList(params: number[]) {
            dispatch(actions.setList(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldComponent);