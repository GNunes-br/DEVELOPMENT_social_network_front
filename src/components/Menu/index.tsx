import InRelevanceIcon from '../../utils/icons/in-relevance-icon'
import MyProfileIcon from '../../utils/icons/my-profile-icon'
import MyPublicationsIcon from '../../utils/icons/my-publications-icon'
import { IMenuCompomentProps } from './interfaces/menu-component-props'
import { Body, Content, Footer, Header } from './style'

const MenuComponent = (props: IMenuCompomentProps): JSX.Element => {
    const {
        context: { nickname, profile_picture },
    } = props

    return (
        <Content>
            <Header>
                <div className="profile-info">
                    <img src={profile_picture} alt="Profile Picture" />
                    <h1>{nickname}</h1>
                </div>
            </Header>
            <Body>
                <div className="menu-items">
                    <ul>
                        <li>
                            <MyProfileIcon />
                            <span>Meu Perfil</span>
                        </li>
                        <li>
                            <MyPublicationsIcon />
                            <span>Publicações</span>
                        </li>
                        <li>
                            <InRelevanceIcon />
                            <span>Em Alta</span>
                        </li>
                    </ul>
                </div>
                <div className="exit-button"></div>
            </Body>
            <Footer>
                <button>Sair</button>
            </Footer>
        </Content>
    )
}

export default MenuComponent
