import { Form, Image, Intro } from './styles'

interface PageProps {
    content: JSX.Element
}

const IntroLayout = (props: PageProps): JSX.Element => {
    const { content } = props

    return (
        <>
            <Intro>
                <Image />
                <Form>{content}</Form>
            </Intro>
        </>
    )
}

export default IntroLayout
