import { Content, Line, Menu, Modal, UserNameAndImage } from './style'

const MenuComponent = (): JSX.Element => {
    const userData = {
        nickname: 'GNunesBR',
        profilePicture: 'not-profile-picture-icon.svg',
    }

    const { nickname, profilePicture } = userData

    return (
        <Content>
            <Modal>
                <UserNameAndImage>
                    <img src={profilePicture} alt="Profile Picture" />
                    <h1>{nickname}</h1>
                </UserNameAndImage>
                <Line />
                <Menu>
                    <ul>
                        <li>
                            <img
                                src="my-profile-icon.svg"
                                alt="My Profile Icon"
                            />
                            Meu Perfil
                        </li>
                        <li>
                            <img
                                src="my-publications-icon.svg"
                                alt="My Publications Icon"
                            />
                            Publicações
                        </li>
                        <li>
                            <img
                                src="in-relevance-icon.svg"
                                alt="Hot Publications Icon"
                            />
                            Em Alta
                        </li>
                        <li>
                            <img
                                src="my-supporters-icon.svg"
                                alt="My Followers Icon"
                            />
                            Apoiadores
                        </li>
                        <li>
                            <img
                                src="my-groups-icon.svg"
                                alt="My Groups Icon"
                            />
                            Grupos
                        </li>
                        <li>
                            <img src="exit-icon.svg" alt="Exit Icon" />
                            Sair
                        </li>
                    </ul>
                </Menu>
            </Modal>
        </Content>
    )
}

export default MenuComponent
