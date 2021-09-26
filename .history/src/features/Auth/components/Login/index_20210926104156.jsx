import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice.js';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/index.jsx';

Login.propTypes = {
    
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

 
  
    
    const handleSubmit  = async (values) => {

        try {
         
           
            const action = login(values);
    
            const resultAction = await dispatch(action);
            console.log(resultAction);
            
            const user = unwrapResult(resultAction);
         //   console.log('new user',user);

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
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;