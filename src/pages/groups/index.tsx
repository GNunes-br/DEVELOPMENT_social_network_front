import { useEffect, useState } from 'react';
import GroupsComponent from '../../components/Groups';
import HomeLayout from '../../layout/home';
import { api } from '../../services/api';

const GroupsPage = (): JSX.Element => {
    const [user, setUser] = useState(null);
    const [groups, setGroups] = useState(null);

    useEffect(() => {
        api.get('/user').then(success => {
            setUser({
                nickname: success.data.name,
                email: success.data.email,
                profilePicture: 'not-profile-picture-icon.svg',
            });
        });

        api.get('/group').then(success => {
            setGroups(success.data);
        });
    }, []);

    if (groups && user) {
        return (
            <HomeLayout
                child={<GroupsComponent groups={groups} />}
                user={user}
            />
        );
    } else {
        return (
            <HomeLayout
                child={<GroupsComponent groups={[]} />}
                user={{
                    nickname: '...',
                    profilePicture: 'not-profile-picture-icon.svg',
                }}
            />
        );
    }
};

export default GroupsPage;
