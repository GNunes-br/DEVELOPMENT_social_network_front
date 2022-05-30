import React, { useState } from 'react'
import { Body, Content } from './styles'

const LoginComponent = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
    }

    return (
        <Content>
            <Body>
                <form onSubmit={submitForm}>
                    <div className="form-title">
                        <img src={'/logo.svg'} />
                        <h1>Entrar</h1>
                    </div>

                    <div className="form-content">
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
                    </div>

                    <div className="form-buttons">
                        <div className="submit-button">
                            <a>
                                <button type="submit">Entrar</button>
                            </a>
                        </div>

                        <div className="register-button">
                            <p>
                                Novo por aqui? <a>cadastre-se</a>
                            </p>
                        </div>
                    </div>
                </form>
            </Body>
        </Content>
    )
}

export default LoginComponent
