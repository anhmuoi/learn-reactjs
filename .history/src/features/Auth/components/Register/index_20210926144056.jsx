import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice.js';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm/index.jsx';

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

 
  
    
    const handleSubmit  = async (values) => {

        try {
         
    
            values.username = values.email;
            const action = register(values);
    
            const resultAction = await dispatch(action);
            console.log(resultAction);
            
            const user = unwrapResult(resultAction);
         //   console.log('new user',user);
         // do something here

            enqueueSnackbar('Create Account Success!', { variant:"success" });
            
            const { closeDialog } = props;
            if(closeDialog)
            {
                closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant:"error" });
          //  console.log('error',error);
           
        }

    }

    

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;