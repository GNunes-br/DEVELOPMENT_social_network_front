import LoginComponent from '../../components/Login'
import IntroLayout from '../../layout/Intro'

const LoginPage = (): JSX.Element => {
    return (
        <>
            <IntroLayout content={<LoginComponent />} />
        </>
    )
}

export default LoginPage
