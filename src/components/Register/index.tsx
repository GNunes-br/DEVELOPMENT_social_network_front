import { Backdrop, CircularProgress } from '@mui/material';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { api } from '../../services/api';
import AlertMessageComponent from '../AlertMessage';
import { Body, Content } from './styles';

const RegisterComponent = (): JSX.Element => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [registerError, setRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState('');
    const [registerLoading, setRegisterLoading] = useState(false);

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        const passwordsDoNotMatch = password !== confirmPassword;
        if (passwordsDoNotMatch) {
            setRegisterError(true);
            setRegisterErrorMessage('As senhas não conferem!');
            return;
        }

        setRegisterLoading(true);
        setRegisterError(false);

        await api
            .post('/user/create', {
                nickname,
                email,
                password,
                confirmPassword,
            })
            .then(() => {
                Router.push('/login');
            })
            .catch(error => {
                setRegisterLoading(false);
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message;
                    setRegisterErrorMessage(errorMessage);
                } else {
                    setRegisterErrorMessage('Algo inesperado aconteceu!');
                }
                setRegisterError(true);
            });
    };

    return (
        <div>
            <Content>
                <Body>
                    <form onSubmit={submitForm}>
                        <div className="form-title">
                            <img src={'/logo.svg'} />
                            <h1>Cadastre-se</h1>
                        </div>

                        <div className="form-content">
                            <input
                                name="nickname"
                                type="text"
                                value={nickname}
                                onChange={event =>
                                    setNickname(event.target.value)
                                }
                                placeholder="Apelido"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                placeholder="E-mail"
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
                            <input
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={event =>
                                    setConfirmPassword(event.target.value)
                                }
                                placeholder="Confirmar senha"
                                required
                            />
                        </div>

                        <div className="form-buttons">
                            <div className="submit-button">
                                <a>
                                    <button type="submit">Cadastrar-se</button>
                                </a>
                            </div>

                            <Link href={'login'}>
                                <div className="register-button">
                                    <p>
                                        Já sou cadastrado, <a>entrar</a>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </form>
                </Body>
            </Content>
            <Backdrop open={registerLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <AlertMessageComponent
                message={registerErrorMessage}
                severity={'error'}
                open={registerError}
                setOpen={setRegisterError}
            />
        </div>
    );
};

export default RegisterComponent;
