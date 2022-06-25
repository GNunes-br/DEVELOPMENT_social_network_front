import MenuComponent from '../../components/Menu';
import { Content } from './styles';

interface Props {
    child: JSX.Element;
    user: {
        nickname: string;
        profilePicture: string;
    };
}

const HomeLayout = (props: Props): JSX.Element => {
    const {
        child,
        user: { nickname, profilePicture },
    } = props;

    return (
        <Content>
            <MenuComponent
                nickname={nickname}
                profilePicture={profilePicture}
            />
            {child}
        </Content>
    );
};

export default HomeLayout;
