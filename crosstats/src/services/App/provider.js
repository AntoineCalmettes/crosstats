import React, { useState ,useEffect} from "react";
import PackageContext from './appContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { LoadingScreen } from '../../components/LoadingScreen/index';
import { getUser } from "../usersService";
import history from '../../services/historyService';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialState = {
    isAppLoading: true,
    user: null,
    email:localStorage.getItem('email') || null,
    token:localStorage.getItem('token') || null,
    snackbar:null
}

export const Provider = ({ children }) => {
    
    const [state, setState] = useState(initialState);
    const [open, setOpen] = React.useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    
    useEffect(() => {
        if(state.token && state.email){
            setState({...state,isAppLoading:true})
            async function fetchUser(){
                try {
                    const user = await getUser(state.email,state.token)
                    setTimeout(() => {
                        setState({...state,isAppLoading:false,user})
                    }, 1600);
                } catch (error) {
                    setState({...state,isAppLoading:false})
                }
            }
            fetchUser();
        } else {
            setState({...state,isAppLoading:false})
        }
        return () => {
            
        };
    }, [state.token])
    
    return (
        <PackageContext.Provider
        value={{
            data: state,
            toggleAppLoading: (isAppLoading) => {
                setState({ ...state, isAppLoading });
            },
            openSnackBar:(message,type)=>{
                setState({...state,snackbar:{message,type}})
                setOpen(true);
            },
            onLogout:()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                setState({ ...state, token:null,email:null,user:null });
                history.push('/')
            },
            onLoged:(token,email)=>{
                localStorage.setItem('token', token);
                localStorage.setItem('email',email);
                setState({ ...state, token,email });
            },
        }}>
        {state.isAppLoading ? <LoadingScreen/> :  children}
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state.snackbar ? state.snackbar.type : 'error'}>
        {state.snackbar ? state.snackbar.message : ''}
        </Alert>
        </Snackbar>
        </PackageContext.Provider>
        );
    };