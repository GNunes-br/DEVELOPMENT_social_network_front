import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, FlatButton, Form, Title } from './styles'

const LoginComponent = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
    }

    return (
        <div>
            <Form onSubmit={submitForm}>
                <Image src={'/logo.svg'} width={30} height={30} />

                <Title>Entrar</Title>

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
                />

                <Button type="submit">Entrar</Button>
=======
                />

                <Link href={'feed'}>
                    <a>
                        <Button type="submit">Entrar</Button>
                    </a>
                </Link>
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65

                <Link href={'register'}>
                    <FlatButton>
                        Novo por aqui? <a>cadastre-se</a>
                    </FlatButton>
                </Link>
            </Form>
        </div>
    )
}

export default LoginComponent
