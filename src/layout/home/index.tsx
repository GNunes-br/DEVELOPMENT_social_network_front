import MenuComponent from '../../components/Menu'
import { Home } from './styles'

interface PageProps {
    context: JSX.Element
}

const HomeLayout = (props: PageProps): JSX.Element => {
    const { context } = props

    return (
        <Home>
            <MenuComponent />
            {context}
        </Home>
    )
}

export default HomeLayout
