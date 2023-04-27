import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js'
import Grid from '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCourse from './AddCourse';
import SchedList from './SchedList.js';
import AddStudent from './AddStudent.js';


class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { courses : [] };
  } 

  render() {
     const columns = [
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'email', headerName: 'Email', width: 250 },
      { field: 'statusCode', headerName: 'Status Code', width: 150 },

      ];
  
  return(
      <div>
          <AppBar position="static" color="default">
            <Toolbar>
               <Typography variant="h6" color="inherit">
                  { 'Add New Student Page' }
                </Typography>
            </Toolbar>
          </AppBar>
          <div className="App">

            <Grid container>
              <Grid item>

                    {/* button for pop up to add new student */}
			    <ButtonGroup>
                  <AddStudent addStudent={this.addStudent}  />
				</ButtonGroup>

              </Grid>
            </Grid>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={this.state.students} columns={columns} />
            </div>
            <ToastContainer autoClose={1500} />   
          </div>
      </div>
      ); 
  }
}

export default NewStudent;