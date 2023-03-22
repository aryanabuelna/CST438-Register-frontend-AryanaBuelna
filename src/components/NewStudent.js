import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SEMESTER_LIST} from '../constants.js'

class NewStudent extends Component {
    render() {
        <div>
            <Button variant="outlined" color="primary" style={{margin: 10}}>
                Add New Student
            </Button>
        </div>
    };
};

export default NewStudent;