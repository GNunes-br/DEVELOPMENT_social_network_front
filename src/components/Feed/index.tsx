import { Modal } from '@mui/material';
import { useState } from 'react';
import AddIcon from '../../utils/icons/add-icon';
import PublicationComponent from '../Publication';
import PublicationPostComponent from '../PublicationPost';
import { Body, Content } from './style';

interface Props {
    user: {
        nickname: string;
        profilePicture: string;
    };
    publications: Array<{
        id_publication: number;
        date: string;
        group_name: string;
        likes: number;
        tags: Array<{ text: string }>;
        content: string;
    }>;
    groups: Array<any>;
}

const FeedComponent = (props: Props): JSX.Element => {
    const { publications, user, groups } = props;

    const [openPublicationPostModal, setOpenPublicationPostModal] =
        useState(false);
    const handleOpenModal = () => setOpenPublicationPostModal(true);
    const handleCloseModal = () => setOpenPublicationPostModal(false);

    return (
        <Content>
            <Body>
                <div className="floating-button">
                    <button onClick={handleOpenModal}>
                        <AddIcon />
                    </button>
                </div>
                {publications.length ? (
                    publications.map(publication => {
                        const { id_publication } = publication;

                        return (
                            <PublicationComponent
                                key={id_publication}
                                context={publication}
                            />
                        );
                    })
                ) : (
                    <div className="empty-feed">
                        <p>
                            Participe de um grupo para visualizar as publicações
                        </p>
                    </div>
                )}
            </Body>
            <Modal open={openPublicationPostModal}>
                <PublicationPostComponent
                    handleCloseModal={handleCloseModal}
                    context={{ ...user, groups }}
                />
            </Modal>
        </Content>
    );
};

export default FeedComponent;
