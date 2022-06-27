import { useEffect, useState } from 'react';
import FeedComponent from '../../components/Feed';
import HomeLayout from '../../layout/home';
import { api } from '../../services/api';

interface Props {
    user: {
        nickname: string;
        profilePicture: string;
    };
    publications: Array<any>;
    groups: Array<any>;
}

const FeedPage = (): JSX.Element => {
    const [user, setUser] = useState(null);
    const [groups, setGroups] = useState(null);
    const [publications, setPublications] = useState(null);

    useEffect(() => {
        api.get('/user').then(success => {
            setUser({
                nickname: success.data.name,
                profilePicture: 'not-profile-picture-icon.svg',
            });
        });

        api.get('/group').then(success => {
            setGroups(success.data);
        });

        api.get('/publication').then(success => {
            setPublications(success.data);
        });
    }, []);

    if (user && groups && publications) {
        return (
            <HomeLayout
                child={
                    <FeedComponent
                        publications={publications}
                        user={user}
                        groups={groups}
                    />
                }
                user={user}
            />
        );
    } else {
        return (
            <HomeLayout
                child={
                    <FeedComponent
                        publications={[]}
                        user={{
                            nickname: '...',
                            profilePicture: 'not-profile-picture-icon.svg',
                        }}
                        groups={[]}
                    />
                }
                user={{
                    nickname: '...',
                    profilePicture: 'not-profile-picture-icon.svg',
                }}
            />
        );
    }
};

export default FeedPage;
