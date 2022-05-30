import React, { useState } from 'react'
import { Body, Content } from './styles'

const RegisterComponent = (): JSX.Element => {
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
    }

    return (
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
                            onChange={event => setSurname(event.target.value)}
                            placeholder="Apelido"
                        />
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder="E-mail"
                        />
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Senha"
                        />
                        <input
                            name="password-confirm"
                            type="password"
                            value={passwordConfirmation}
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            placeholder="Confirmar senha"
                        />
                    </div>

                    <div className="form-buttons">
                        <div className="submit-button">
                            <a>
                                <button type="submit">Cadastrar-se</button>
                            </a>
                        </div>

                        <div className="register-button">
                            <p>
                                Já sou cadastrado, <a>entrar</a>
                            </p>
                        </div>
                    </div>
                </form>
            </Body>
        </Content>
    )
}

export default RegisterComponent
