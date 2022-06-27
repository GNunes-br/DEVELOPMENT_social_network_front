import GroupsComponent from '../../components/Groups';
import HomeLayout from '../../layout/Home';
import { api } from '../../services/api';

interface Props {
    user: {
        nickname: string;
        profilePicture: string;
    };
    groups: Array<any>;
}

const GroupsPage = (props: Props): JSX.Element => {
    const { user, groups } = props;

    return (
        <HomeLayout child={<GroupsComponent groups={groups} />} user={user} />
    );
};

export async function getStaticProps(ctx: any) {
    try {
        const userDetailsResponse = await api.get('/user');

        const groupsResponse = await api.get('/group');

        const {
            data: { name: nickname },
        } = userDetailsResponse;

        const { data: groups } = groupsResponse;

        return {
            props: {
                user: {
                    nickname,
                    profilePicture: 'not-profile-picture-icon.svg',
                },
                groups,
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

export default GroupsPage;
