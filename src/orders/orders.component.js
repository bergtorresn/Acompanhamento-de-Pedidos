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
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/SkipNext';

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

class Orders extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(orderAction.getOrders());
    }
    handleEditClick = (event, obj, deleted) => {
        const { dispatch } = this.props;
        dispatch(orderAction.editOrderStatus(obj, deleted))
    };

    render() {
        const { classes } = this.props;
        const { order } = this.props.order;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar />
                    <Nav />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                                <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-order">Adicionar Pedido</Button>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container spacing={24}>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome do Cliente</TableCell>
                                            <TableCell>Status do pedido</TableCell>
                                            <TableCell>Detalhes do pedido</TableCell>
                                            <TableCell>Próximo Status</TableCell>
                                            <TableCell>Excluir</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {order.map(n => {
                                            if (n.orderstatus === 0) {
                                                return (
                                                    <TableRow key={n.id}>
                                                        <TableCell component="th" scope="row">
                                                            {n.customerName}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            NOVO
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {n.orderDescription}
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Edit"
                                                                onClick={(event) => this.handleEditClick(event, n, false)}>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Delete"
                                                                onClick={(event) => this.handleEditClick(event, n, true)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            } else if (n.orderstatus === 1) {
                                                return (
                                                    <TableRow key={n.id}>
                                                        <TableCell component="th" scope="row">
                                                            {n.customerName}
                                                        </TableCell>
                                                        <TableCell>
                                                            EM PREPARAÇÃO
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {n.orderDescription}
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Edit"
                                                                onClick={(event) => this.handleEditClick(event, n, false)}>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Delete"
                                                                onClick={(event) => this.handleEditClick(event, n, true)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            } else if (n.orderstatus === 2) {
                                                return (
                                                    <TableRow key={n.id}>
                                                        <TableCell component="th" scope="row">
                                                            {n.customerName}
                                                        </TableCell>
                                                        <TableCell>
                                                            PRONTO PARA PAGAMENTO
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {n.orderDescription}
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Edit"
                                                                onClick={(event) => this.handleEditClick(event, n, false)}>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Delete"
                                                                onClick={(event) => this.handleEditClick(event, n, true)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            } else if (n.orderstatus === 3) {
                                                return (
                                                    <TableRow key={n.id}>
                                                        <TableCell component="th" scope="row">
                                                            {n.customerName}
                                                        </TableCell>
                                                        <TableCell>
                                                            CONCLUÍDO
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {n.orderDescription}
                                                        </TableCell>
                                                        <TableCell>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton className={classes.button} aria-label="Delete"
                                                                onClick={(event) => this.handleEditClick(event, n, true)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        })}
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

Orders.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        order: state.order
    };
}

const connectedOrdersPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false

})(withStyles(styles)(Orders)));

export { connectedOrdersPage as Orders };
