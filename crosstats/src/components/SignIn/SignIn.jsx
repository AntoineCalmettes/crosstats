import React from "react";
import { Abstract } from "./abstract";
import { TextFieldCustom } from '../shared/TextFieldCustom/index'
import Button from '@material-ui/core/Button';
import { GoogleLogo } from '../shared/GoogleLogo/GoogleLogo';

const SignIn = props => {

    return (
        <div className="abstract-bg">
            <h2 className="mb-2 p-32 title">Crosstats</h2>
            <div className="row  h-100">
                <div className="col-xl-5 ">
                    <div className="p-32">
                        <h1 className="title mb-3">Bon retour parmis nous</h1>
                        <h4 className="font-weight-normal mb-4">
                            Connecte toi pour utiliser Crosstats.
                            </h4>
                        <form className="mb-5">
                            <div className="mb-4">
                                <TextFieldCustom id={'email'} label={'Email'} autoFocus={true} type={'text'} />
                            </div>
                            <div className="mb-2">
                                <TextFieldCustom id={'password'} label={'Mot de passe'} type={'password'} />
                            </div>
                            <p className="text-center mb-0"><button type="button" className="btn btn-link" style={{ color: 'white' }}>Mot de passe oublié ?</button> </p>
                            <div className="mb-4">
                                <Button className="w-100" variant="contained" color="primary" disableElevation>
                                    Se connecter
    </Button>
                            </div>
                            <p className="text-center font-weight-bold">OU</p>
                            <div>
                                <Button variant="outlined" className="outline-btn w-100" startIcon={<GoogleLogo />}>
                                    Se connecter avec Google
</Button>
                            </div>
                        </form>
                        <p className="mt-auto">Vous n'avez pas de compte ? <button type="button" className="btn btn-link px-0" style={{ color: 'white', textDecoration: 'underline' }}>S'inscrire</button> </p>
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

export { SignIn };