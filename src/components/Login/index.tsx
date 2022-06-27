import { Backdrop, CircularProgress } from '@mui/material';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { api } from '../../services/api';
import AlertMessageComponent from '../AlertMessage';
import { Body, Content } from './styles';

const LoginComponent = (): JSX.Element => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        setLoginLoading(true);
        setLoginError(false);

        await api
            .post('/user/login', {
                nickname,
                password,
            })
            .then((response: any) => {
                Cookies.set('token', response.data.token);
                Router.push('/feed');
            })
            .catch(error => {
                setLoginLoading(false);
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message;
                    setLoginErrorMessage(errorMessage);
                } else {
                    setLoginErrorMessage('Algo inesperado aconteceu!');
                }
                setLoginError(true);
            });
    };

    return (
        <div>
            <Content>
                <Body>
                    <form onSubmit={submitForm}>
                        <div className="form-title">
                            <img src={'/logo.svg'} />
                            <h1>Entrar</h1>
                        </div>

                        <div className="form-content">
                            <input
                                name="nickname"
                                type="nickname"
                                value={nickname}
                                onChange={event =>
                                    setNickname(event.target.value)
                                }
                                placeholder="Apelido"
                                required
                            />
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Senha"
                                required
                            />
                        </div>

                        <div className="form-buttons">
                            <div className="submit-button">
                                <a>
                                    <button type="submit">Entrar</button>
                                </a>
                            </div>

                            <Link href={'register'}>
                                <div className="register-button">
                                    <p>
                                        Novo por aqui?
                                        <a> cadastre-se</a>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </form>
                </Body>
            </Content>
            <Backdrop open={loginLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <AlertMessageComponent
                message={loginErrorMessage}
                severity={'error'}
                open={loginError}
                setOpen={setLoginError}
            />
        </div>
    );
};

export default LoginComponent;
