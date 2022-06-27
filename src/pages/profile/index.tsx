import ProfileComponent from '../../components/Profile';
import HomeLayout from '../../layout/Home';
import { api } from '../../services/api';

interface Props {
    user: {
        nickname: string;
        email: string;
        profilePicture: string;
    };
}

const ProfilePage = (props: Props): JSX.Element => {
    const { user } = props;

    return <HomeLayout child={<ProfileComponent user={user} />} user={user} />;
};

export async function getStaticProps(ctx: any) {
    try {
        const userDetailsResponse = await api.get('/user');

        const {
            data: { name: nickname, email },
        } = userDetailsResponse;

        return {
            props: {
                user: {
                    nickname,
                    email,
                    profilePicture: 'not-profile-picture-icon.svg',
                },
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}

export default ProfilePage;
