import MenuComponent from '../../components/Menu'
import { IHomeLayoutProps } from './interfaces/home-layout-props'
import { Content } from './styles'

const HomeLayout = (props: IHomeLayoutProps): JSX.Element => {
    const { child, context } = props

    return (
        <Content>
            <MenuComponent context={context} />
            {child}
        </Content>
    )
}

export default HomeLayout
