import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class PersonList extends React.Component {
    state = {
        persons: [],
    };
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({persons: res.data})
        });
    }

    render() {
        return (
        <Paper>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.persons.map(person => {
                    return (
                        <TableRow key={person.id}>
                            <TableCell>{person.id}</TableCell>
                            <TableCell component="th" scope="person">
                                {person.name}
                            </TableCell>
                            <TableCell>{person.username}</TableCell>
                            <TableCell>{person.email}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </Paper>

        );
    }
}