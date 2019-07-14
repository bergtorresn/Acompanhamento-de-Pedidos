import { connect } from 'react-redux';
import { orderAction } from '../actions';
import React, { Component } from 'react';
import AppBar from '../components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../components/nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    paper: {
        position: 'absolute',
        width: theme.spacing(50),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
    },
});


class AllOrders extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(orderAction.getOrders());
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { order } = this.props.order;
        var countNewOrder = 0;
        var countOrdersInProgress = 0;
        var countOrdersReadyToPay = 0;
        var countOrdersDone = 0;

        order.map(function (obj) {
            if (obj.orderstatus === 0) {
                countNewOrder++;
            }
        });

        order.map(function (obj) {
            if (obj.orderstatus === 1) {
                countOrdersInProgress++;
            }
        });

        order.map(function (obj) {
            if (obj.orderstatus === 2) {
                countOrdersReadyToPay++;
            }
        });

        order.map(function (obj) {
            if (obj.orderstatus === 3) {
                countOrdersDone++;
            }
        });

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar />
                    <Nav />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Quantidade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                NOVO
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {countNewOrder}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                EM PREPARAÇÃO
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {countOrdersInProgress}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                PRONTOS PARA PAGAMENTO
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {countOrdersReadyToPay}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                CONCLUÍDOS
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {countOrdersDone}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </main>
                </div>
            </div>
        );
    }
}

AllOrders.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        order: state.order
    };
}

const connectedAllOrdersPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false

})(withStyles(styles)(AllOrders)));

export { connectedAllOrdersPage as AllOrders };
