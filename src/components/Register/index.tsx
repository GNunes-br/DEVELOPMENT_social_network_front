import { Backdrop, CircularProgress } from '@mui/material'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import { api } from '../../services/api'
import AlertMessageComponent from '../AlertMessage'
import { Body, Content } from './styles'

const RegisterComponent = (): JSX.Element => {
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const [registerError, setRegisterError] = useState(false)
    const [registerErrorMessage, setRegisterErrorMessage] = useState('')
    const [registerLoading, setRegisterLoading] = useState(false)

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()

        const passwordsDoNotMatch = password !== passwordConfirmation
        if (passwordsDoNotMatch) {
            setRegisterError(true)
            setRegisterErrorMessage('As senhas não conferem!')
            return
        }

        setRegisterLoading(true)
        setRegisterError(false)

        await api
            .post('/register', {
                surname,
                email,
                password,
                passwordConfirmation,
            })
            .then(() => {
                Router.push('/login')
            })
            .catch(error => {
                setRegisterLoading(false)
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message
                    setRegisterErrorMessage(errorMessage)
                } else {
                    setRegisterErrorMessage('Algo inesperado aconteceu!')
                }
                setRegisterError(true)
            })
    }

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
                                name="surname"
                                type="text"
                                value={surname}
                                onChange={event =>
                                    setSurname(event.target.value)
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
                                name="password-confirm"
                                type="password"
                                value={passwordConfirmation}
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
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
    )
}

export default RegisterComponent
