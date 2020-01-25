import React, { useState, useContext } from "react";
// import { Abstract } from "./abstract";
import { GoogleLogo } from '../shared/GoogleLogo/GoogleLogo';
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import {
    TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../environments/environment';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppContext from "../../services/App/appContext";
import {logUser} from "../../services/authService";

const SignIn = props => {
    const { openSnackBar,onLoged,data } = useContext(AppContext);
    const { handleSubmit, errors, control } = useForm({defaultValues:{password:'',email:''}});
    const onSubmit = data => { _onLogin(data.email, data.password) }
    const [isAuthLoading, setAuthLoading] = useState(false);
    
    const responseGoogle = (response) => {
        const email = response.profileObj ? response.profileObj.email : '';
        const password = response.profileObj ? response.profileObj.googleId : '';
        _onLogin(email, password);
    }
    
    const _onLogin = async (email, password) => {
        // console.log(email, password);
        
        setAuthLoading(true);
        try {
            const token = await logUser(email,password);
            setAuthLoading(false);
            onLoged(token,email)
        } catch (error) {
            setAuthLoading(false);
            openSnackBar("Adresse email et mot de passe incorrect. Veuillez vérifier et réessayer.",'error') 
        }
    }
    
    return (
        <div className="abstract-bg">
        <h2 className="mb-2 p-32 title">Crosstats</h2>
        <div className="row  h-100">
        <div className="col-xl-5 ">
        <div className="p-32">
        <h1 className="title mb-3">Bon retour parmis nous</h1>
        <h4 className="font-weight-normal mb-4">Connecte-toi pour utiliser Crosstats.</h4>
        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
        <Controller as={<TextField fullWidth={true} autoFocus={true} id={'email'} label={'Email'} type={'email'} placeholder={'JohnDoe@gmail.com'} required />} name="email" control={control} />
        </div>
        <div className="mb-2">
        <Controller rules={{ minLength:6 }} as={<TextField fullWidth={true} id={'password'} label={'Mot de passe'} type={'password'} placeholder={'******'} required />} name="password" control={control} />
        <small id="passwordHelp" className="text-danger">{ errors.password && errors.password.type === "minLength" && "Votre mot de passe doit contenir minimums 6 caractères"}</small>
        </div>
        <p className="text-center mb-0"><button type="button" className="btn btn-link" style={{ color: 'white' }}>Mot de passe oublié ?</button> </p>
        <div className="mb-4">
        <Button type="submit" className="w-100" variant="contained" color="primary" disableElevation disabled={isAuthLoading}>{isAuthLoading ? <CircularProgress color="secondary" size={30} /> : "Se connecter"}</Button>
        </div>
        </form>
        <p className="text-center font-weight-bold">OU</p>
        <div>
        <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        disabled={isAuthLoading}
        render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button" variant="outlined" className="outline-btn w-100" startIcon={<GoogleLogo />}> Se connecter avec Google</Button>
            )}
            cookiePolicy={'single_host_origin'}
            />
            </div>
            <p className="mt-4">Vous n'avez pas de compte ? <Link to="/signup"><button type="button" className="btn btn-link px-0" style={{ color: 'white', textDecoration: 'underline' }}>S'inscrire</button> </Link></p>
            </div>
            </div>
            <div className="col-xl-7 abstract d-none d-xl-block">
            <div className="w-100">
            {/* <Abstract /> */}
            </div>
            </div>
            </div>
            </div>
            )
        };
        
        export { SignIn };