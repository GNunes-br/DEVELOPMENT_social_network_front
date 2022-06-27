import { Body, Content } from './style';

interface Props {
    user: {
        nickname: string;
        email: string;
        profilePicture: string;
    };
}

const ProfileComponent = (props: Props): JSX.Element => {
    const {
        user: { profilePicture, nickname, email },
    } = props;

    return (
        <Content>
            <Body>
                <div className="profile">
                    <img src={profilePicture} />
                    <h1>{nickname}</h1>
                </div>
                <div className="profile-details">
                    <table>
                        <th>
                            <tr>Apelido</tr>
                            <tr>Email</tr>
                        </th>
                        <td>
                            <tr>{nickname}</tr>
                            <tr>{email}</tr>
                        </td>
                    </table>
                </div>
            </Body>
        </Content>
    );
};

export default ProfileComponent;
