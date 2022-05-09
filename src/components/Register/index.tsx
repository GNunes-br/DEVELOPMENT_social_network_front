import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, FlatButton, Form, Title } from './styles'

const RegisterComponent = (): JSX.Element => {
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
    }

    return (
        <div>
            <Form onSubmit={submitForm}>
                <Image src={'/logo.svg'} width={30} height={30} />

                <Title>Cadastre-se</Title>

                <input
                    name="surname"
                    type="text"
                    value={surname}
                    onChange={event => setSurname(event.target.value)}
                    placeholder="Apelido"
<<<<<<< HEAD
                    required
=======
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65
                />
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="E-mail"
<<<<<<< HEAD
                    required
=======
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Senha"
<<<<<<< HEAD
                    required
=======
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65
                />
                <input
                    name="password-confirm"
                    type="password"
                    value={passwordConfirmation}
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    placeholder="Confirmar senha"
<<<<<<< HEAD
                    required
=======
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65
                />

                <Button type="submit">Cadastrar-se</Button>

                <Link href={'login'}>
                    <FlatButton>
                        Já sou cadastrado, <a>entrar</a>
                    </FlatButton>
                </Link>
            </Form>
        </div>
    )
}

export default RegisterComponent
