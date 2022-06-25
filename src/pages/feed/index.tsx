import FeedComponent from '../../components/Feed';
import HomeLayout from '../../layout/Home';
import { api } from '../../services/api';

interface Props {
    user: {
        nickname: string;
        profilePicture: string;
    };
    publications: Array<any>;
}

const FeedPage = (props: Props): JSX.Element => {
    const { user, publications } = props;

    return (
        <HomeLayout
            child={<FeedComponent publications={publications} />}
            user={user}
        />
    );
};

export async function getStaticProps(ctx: any) {
    try {
        const response = await api.get('/publications');

        const {
            data: { nickname, profile_picture: profilePicture, publications },
        } = response;

        return {
            props: {
                user: {
                    nickname,
                    profilePicture,
                },
                publications,
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

export default FeedPage;
