import { useEffect, useState } from 'react';
import ProfileComponent from '../../components/Profile';
import HomeLayout from '../../layout/home';
import { api } from '../../services/api';

const ProfilePage = (): JSX.Element => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get('/user').then(success => {
            setUser({
                nickname: success.data.name,
                email: success.data.email,
                profilePicture: 'not-profile-picture-icon.svg',
            });
        });
    }, []);

    if (user) {
        return (
            <HomeLayout child={<ProfileComponent user={user} />} user={user} />
        );
    } else {
        return (
            <HomeLayout
                child={
                    <ProfileComponent
                        user={{
                            email: '...',
                            nickname: '...',
                            profilePicture: 'not-profile-picture-icon.svg',
                        }}
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

export default ProfilePage;
