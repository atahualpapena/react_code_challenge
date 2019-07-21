import React from 'react';
import axios from 'axios';

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import Checkbox from '@material-ui/core/Checkbox';


export default class CommentsList extends React.Component {
    state = {
        comments: [],
        page: 0,
        rowsPerPage: 5
    };
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({comments: res.data})
        });
    }


    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    }
    render() {
        const { comments, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, comments.length - page * rowsPerPage);

        return (
            <Paper>
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(post => {
                            return (
                                <TableRow key={post.userId}>
                                    <TableCell component="th" scope="post">{post.id}</TableCell>
                                    <TableCell component="th" scope="post">{post.title}</TableCell>
                                    <TableCell component="th" scope="post">{post.body}</TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={comments.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
        )
    }
}


