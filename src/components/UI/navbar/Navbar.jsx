import React from 'react'
import cl from './Nvbar.module.css'
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import ReactIcon from '../../UI/icons/ReactIcon'

function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        <nav className={cl.navbar}>
            <div style={{ minHeight: 'inherit' }} className="container">
                <div className={cl.navbar__wrap}>
                    <Link className={cl.logo} to='/'>
                        <ReactIcon />
                    </Link>
                    {isAuth && <Button
                        style={{
                            background: '#1C1D21',
                            padding: '10px 30px'
                        }}
                        onClick={() => {
                            setIsAuth(false);
                            localStorage.removeItem('auth');
                        }}>
                        Logout
                    </Button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar