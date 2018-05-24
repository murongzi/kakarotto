import './style.scss';
import * as React from 'react'
import {
    Button,
    Paper,
    TablePagination,
    TableFooter,
    Modal
} from "@material-ui/core"
import RegularCard from "../../components/RegularCard"
import Table from '../../components/Table';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HomeAction from './action'
import { IRootState } from '../../IRootState';
import { IDispatchProps, IStateProps } from './IHome'
import { Dispatch } from 'redux'

const styles = () => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function mapStateToProps (state: IRootState, ownProps) {
    return {
        reducers: state.HomeReducers
    }
}

function mapActionToDispatch(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(HomeAction, dispatch)
    }
}

interface IASP extends IRootState, IDispatchProps,IStateProps  {

}

export default connect(mapStateToProps, mapActionToDispatch)(class HelloWorldComponent extends React.Component<IASP> {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.actions.getList({
            a:"fasdfasdf"
        })
    }

    render() {
        const classes = styles();

        console.log(this.props.reducers.list);

        return (
            <div className="Home">
            <button onClick={this.onClick}>button</button>

            <RegularCard
                cardTitle="Simple Table"
                cardSubtitle="Here is a subtitle for this table"
                content={
                    <Table
                    tableHeaderColor="primary"
                    tableHead={["Name", "Country", "City", "Salary"]}
                    tableData={[
                        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                    ]}
                    />
                }
            />
                {/* <Paper>
                    <Table className="Home-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell numeric>Calories</TableCell>
                                <TableCell numeric>Fat (g)</TableCell>
                                <TableCell numeric>Carbs (g)</TableCell>
                                <TableCell numeric>Protein (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            {n.name}
                                        </TableCell>
                                        <TableCell numeric>{n.calories}</TableCell>
                                        <TableCell numeric>{n.fat}</TableCell>
                                        <TableCell numeric>{n.carbs}</TableCell>
                                        <TableCell numeric>{n.protein}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    colSpan={5}
                                    count={data.length}
                                    rowsPerPage={3}
                                    page={20}
                                    onChangePage={() => { }}
                                    onChangeRowsPerPage={() => { }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>

                </Paper> */}
            </div>
        );
    }
})