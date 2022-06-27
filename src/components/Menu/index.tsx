import Cookies from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
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
                        <Link href={'profile'}>
                            <li>
                                <MyProfileIcon />
                                <span>Meu Perfil</span>
                            </li>
                        </Link>
                        <Link href={'groups'}>
                            <li>
                                <MyGroupsIcon />
                                <span>Explorar grupos</span>
                            </li>
                        </Link>
                        <Link href={'feed'}>
                            <li>
                                <MyPublicationsIcon />
                                <span>Publicações</span>
                            </li>
                        </Link>
                        {/* <li>
                            <InRelevanceIcon />
                            <span>Em Alta</span>
                        </li> */}
                    </ul>
                </div>
            </Body>
            <Footer>
                <button
                    onClick={() => {
                        Cookies.remove('token');
                        Router.push('/login');
                    }}
                >
                    Sair
                </button>
            </Footer>
        </Content>
    );
};

export default MenuComponent;
