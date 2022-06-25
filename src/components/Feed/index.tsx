import { Modal } from '@mui/material';
import { useState } from 'react';
import AddIcon from '../../utils/icons/add-icon';
import PublicationComponent from '../Publication';
import PublicationPostComponent from '../PublicationPost';
import { Body, Content } from './style';

interface Props {
    publications: Array<{
        id: number;
        date: string;
        group: string;
        group_route: string;
        liked: boolean;
        likes: number;
        tags: Array<string>;
        content: string;
    }>;
}

const FeedComponent = (props: Props): JSX.Element => {
    const { publications } = props;

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
                        const { id } = publication;

                        return (
                            <PublicationComponent
                                key={id}
                                context={publication}
                            />
                        );
                    })
                ) : (
                    <div className="empty-feed">
                        <p>Siga grupos para visualizar novas publicações</p>
                    </div>
                )}
            </Body>
            <Modal open={openPublicationPostModal}>
                <PublicationPostComponent handleCloseModal={handleCloseModal} />
            </Modal>
        </Content>
    );
};

export default FeedComponent;
