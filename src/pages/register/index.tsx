import React from 'react'
import RegisterComponent from '../../components/Register'
import IntroLayout from '../../layout/Intro'

const RegisterPage = (): JSX.Element => {
    return (
        <>
            <IntroLayout content={<RegisterComponent />} />
        </>
    )
}

export default RegisterPage
