import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NewStudent from './NewStudent';
import App from '../App';
import SchedList from './SchedList';
import Semester from './Semester';
import Cookies from 'js-cookie';
import { SERVER_URL } from '../constants';


// properties addStudent is required, function called when Add clicked.
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, name:"", email:"", message:"" };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };


    // need to change this ????
    handleChange = (event) => {
      this.setState({[event.student.name]: event.student.value});
    }

  // Save student and close modal form
    handleAdd = () => {
       //this.props.addStudent(this.state.student);

        console.log("add.student");
        const token = Cookies.get('XSRF-TOKEN');

        // taking info thru url instead of body
        fetch(`${SERVER_URL}/student?name=${this.state.name}&email=${this.state. email}`, 
          {  
            method: 'POST', 
            headers: { 'X-XSRF-TOKEN': token },

            // body: JSON.stringify(
            //     {   name: this.state.name,
            //         email: this.state.email
            //     }
            // )
          } )
        .then((response) => {
          console.log("FETCH");
          return response.json();})

        .then((response) => { 
          // student ID response
          if (response.id) {
            this.setState({ 
              id: response.id,
              message: "Student id = " + response.id
            });

          } else {
            this.setState({message: "Add failed. "});

          }        
        })
        .catch(err => {
            this.setState({message: "Add failed. "});
            console.error(err); 
        })

      this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>

            <Dialog open={this.state.open} onClose={this.handleClose}>

                <DialogTitle>Add Student</DialogTitle>

                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Name" name="name" onChange={this.handleChange}  /> 
                </DialogContent>

                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Email" name="email" onChange={this.handleChange}  /> 
                </DialogContent>

                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Status Code" name="statusCode" onChange={this.handleChange} disabled /> 
                </DialogContent>

                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>

              </Dialog>      
          </div>
      ); 
    }
}

export default AddStudent;