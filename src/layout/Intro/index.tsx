import { Form, Image, Intro } from './styles'

interface PageProps {
<<<<<<< HEAD
    context: JSX.Element
}

const IntroLayout = (props: PageProps): JSX.Element => {
    const { context } = props
=======
    content: JSX.Element
}

const IntroLayout = (props: PageProps): JSX.Element => {
    const { content } = props
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65

    return (
        <>
            <Intro>
                <Image />
<<<<<<< HEAD
                <Form>{context}</Form>
=======
                <Form>{content}</Form>
>>>>>>> 7428a1d59ebd5923bb1cd71f09bd1c2ec2a91c65
            </Intro>
        </>
    )
}

export default IntroLayout
