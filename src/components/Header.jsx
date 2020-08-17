import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import gravatar from '../util/gravatar';
import { logoutRequest } from '../actions';
import '../assets/style/components/header.scss';
import Logo from '../assets/style/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/style/static/user-icon.png'
import ReactRouter from 'react-router';
import { object } from 'prop-types';


const headeer=props=>{
    const {user}=props;
    //una operacion termanria es es cuuando  se usa validacio ? verdadero:falsp
    //en la linea de abajo se puede validar cuantos elementos tiene user
    const hasUser=Object.keys(user).length>0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    return(
        <header className="header">
        <link to="/"></link>
            <img className="header__img" src={Logo} alt="Platzi Video" />
            <div className="header__menu">
            <div className="header__menu--profile">
            
            {hasUser ?
                <img src={gravatar(user.email)} alt={user.email} />
                :
                <img src={UserIcon} alt="" />
            }
                <p>Perfil</p>
            </div>
            <ul>

                {hasUser ?
                   <li><a href="/">Cuenta</a></li> 
                   :null
                }
                {hasUser ?
                <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                :
                <li>
                    <Link to="/login">
                        Iniciar Sesión
                    </Link>
                </li>
                }

                
            </ul>
            </div>
        </header>
    )
}

// export default headeer;
const mapStateToProps=state=>{
   return{
       user:state.user
   };  
};

const mapDispatchToProps = {
    logoutRequest, 
 }

export default connect(mapStateToProps,mapDispatchToProps)(headeer);