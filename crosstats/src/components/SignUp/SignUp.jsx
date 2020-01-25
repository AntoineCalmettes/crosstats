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
import {createUser,logUser} from "../../services/authService";

const SignUp = props => {
    const { openSnackBar,onLoged } = useContext(AppContext);
    const { handleSubmit, errors, control } = useForm({defaultValues:{fullName:'',password:'',email:''}});
    const onSubmit = user => { _CreateUser(user) }
    const [isAuthLoading, setAuthLoading] = useState(false);
    
    const responseGoogle = (response) => {
        const fullName = response.profileObj ? `${response.profileObj.givenName} ${response.profileObj.familyName}` : null
        const email = response.profileObj ? response.profileObj.email : null
        const password = response.profileObj ? response.profileObj.googleId : null
        const user = { fullName, email, password };
        _CreateUser(user);
    }
    
    const _CreateUser = async (user) => {
        // console.log(user);
        setAuthLoading(true);
        try {
            const responseText = await createUser(user) 
            const token = await logUser(user.email,user.password);
            openSnackBar(responseText,'success')  
            setAuthLoading(false);
            onLoged(token,user.email)
        } catch (error) {
            console.log(error);
            setAuthLoading(false);
            openSnackBar(error,'error') 
        }
    }
    return (
        <div className="abstract-bg">
        <h2 className="mb-2 p-32 title">Crosstats</h2>
        <div className="row  h-100">
        <div className="col-xl-5 ">
        <div className="p-32">
        <h1 className="title mb-3">Commence à utiliser Crosstats gratuitement</h1>
        <h4 className="font-weight-normal mb-4">Crée ton compte 100% gratuit afin de profiter du suivie de tes performances sportives et bien plus encore.</h4>
        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
        <Controller rules={{ minLength:4}} as={<TextField error={errors.fullName && errors.fullName.type === "minLength"}  fullWidth={true} autoFocus={true} id={'fullName'} label={'Nom complet'} type={'text'} name="fullName"  placeholder={'John Doe'} required />} name="fullName" control={control} />
        <small id="fullNameHelp" className="text-danger">{ errors.fullName && errors.fullName.type === "minLength" && "Votre nom complet doit contenir minimums 4 caractères"}</small>
        </div>
        <div className="mb-4">
        <Controller as={<TextField fullWidth={true} id={'email'} label={'Email'} type={'email'} placeholder={'JohnDoe@gmail.com'} required />} name="email" control={control} />
        </div>
        <div className="mb-2">
        <Controller rules={{ minLength:6 }}  as={<TextField error={errors.password && errors.password.type === "minLength"} fullWidth={true} id={'password'} label={'Mot de passe'} type={'password'} placeholder={'******'} required />} name="password" control={control} />
        <small id="passwordHelp" className="text-danger">{ errors.password && errors.password.type === "minLength" && "Votre mot de passe doit contenir minimums 6 caractères"}</small>
        </div>
        <div className="mb-4">
        <small className="text-secondary">En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de confidentialité de Crosstats. Je confirme avoir au moins 18 ans</small>
        </div>
        <div className="mb-4">
        <Button type="submit" disabled={isAuthLoading} className="w-100" variant="contained" color="primary" disableElevation>{isAuthLoading ? <CircularProgress color="secondary" size={30} /> : "S'inscrire"}</Button>
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
            <Button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} variant="outlined" className="outline-btn w-100" startIcon={<GoogleLogo />}>S'inscrire avec Google</Button>
            )}
            cookiePolicy={'single_host_origin'}
            />
            </div>
            <p className="mt-4">Vous avez déja un compte ? <Link to="/"><button type="button" className="btn btn-link px-0" style={{ color: 'white', textDecoration: 'underline' }}>Se connecter</button> </Link></p>
            </div>
            </div>
            <div className="col-xl-7 abstract d-none d-xl-block">
            <div className="w-100">
            {/* <Abstract /> */}
            </div>
            </div>
            </div>
            </div>
            );
        };
        
        export { SignUp };