import InRelevanceIcon from '../../utils/icons/in-relevance-icon';
import MyGroupsIcon from '../../utils/icons/my-groups-icon';
import MyProfileIcon from '../../utils/icons/my-profile-icon';
import MyPublicationsIcon from '../../utils/icons/my-publications-icon';
import { Body, Content, Footer, Header } from './style';

interface Props {
    nickname: string;
    profilePicture: string;
}

const MenuComponent = (props: Props): JSX.Element => {
    const { nickname, profilePicture } = props;

    return (
        <Content>
            <Header>
                <div className="profile-info">
                    <img src={profilePicture} alt="Profile Picture" />
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
                            <MyGroupsIcon />
                            <span>Meus Grupos</span>
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
    );
};

export default MenuComponent;
