import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { api } from '../../services/api';
import findPublicationTagsInTextContentHelper from '../../utils/helpers/find-publication-tags-in-text-content-helper';
import AlertMessageComponent from '../AlertMessage';
import { Body, Content, Footer, Header } from './style';

interface Props {
    handleCloseModal: () => void;
    context: {
        nickname: string;
        profilePicture: string;
        groups: Array<any>;
    };
}

const PublicationPostComponent = (props: Props): JSX.Element => {
    const {
        handleCloseModal,
        context: { nickname, profilePicture, groups },
    } = props;

    const includeGroups = [];

    for (const group of groups) {
        if (group.include) {
            includeGroups.push(group);
        }
    }

    const [publicationText, setPublicationText] = useState('');
    const [publicationTags, setPulicationTags] = useState([]);
    const [publicationGroup, setPublicationGroup] = useState('');
    const [openGroupSelectionArea, setOpenGroupSelectionArea] = useState(false);

    const [postPubError, setPostPubError] = useState(false);
    const [postPubErrorMessage, setPostPubErrorMessage] = useState('');
    const [postPubLoading, setPostPubLoading] = useState(false);

    const tagsFoundInPost: boolean = publicationTags.length > 0;

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        const notSelectedGroup = publicationGroup === '';
        if (notSelectedGroup) {
            setPostPubError(true);
            setPostPubErrorMessage('Selecione um grupo');
            return;
        }

        setPostPubLoading(true);
        setPostPubError(false);

        await api
            .post('/publication/create', {
                text: publicationText,
                tags: publicationTags,
                'group-name': publicationGroup,
            })
            .then(() => {
                handleCloseModal();
            })
            .catch(error => {
                setPostPubLoading(false);
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message;
                    setPostPubErrorMessage(errorMessage);
                } else {
                    setPostPubErrorMessage('Algo inesperado aconteceu!');
                }
                setPostPubError(true);
            });
    };

    return (
        <div>
            <form id="publication-post-form" onSubmit={submitForm}>
                <Content>
                    <Header>
                        <img src={profilePicture} alt="Profile Icon" />
                        <div className="header-title">
                            <h1>Criar Publicação</h1>
                            <p>{nickname}</p>
                        </div>
                    </Header>
                    <Body>
                        {!openGroupSelectionArea ? (
                            <div className="publication-content">
                                <textarea
                                    name="publication-text"
                                    form="publication-post-form"
                                    placeholder="Digite aqui..."
                                    value={publicationText}
                                    onChange={event => {
                                        setPublicationText(event.target.value);

                                        setPulicationTags(
                                            findPublicationTagsInTextContentHelper(
                                                event.target.value
                                            ) || []
                                        );
                                    }}
                                >
                                    {publicationText}
                                </textarea>
                                <div className="tags-area">
                                    {tagsFoundInPost ? (
                                        <ul>
                                            {publicationTags.map(tag => {
                                                return <li>{tag}</li>;
                                            })}
                                        </ul>
                                    ) : (
                                        <div className="empty-tags">
                                            <p>
                                                Utilize Tags para relacionar sua
                                                postagem com um assunto
                                                específico. Para adicionar uma
                                                Tag a sua publicação, utilize{' '}
                                                <b>#</b> ao digitar o texto.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="groups-selection-content">
                                <div className="selection-description">
                                    <p>Em quais grupos deseja publicar?</p>
                                </div>
                                <div className="selection-area">
                                    {includeGroups.map(group => {
                                        const hasSelected =
                                            publicationGroup ===
                                            group.group_name;

                                        return (
                                            <div
                                                className={
                                                    hasSelected
                                                        ? 'group-card selected'
                                                        : 'group-card'
                                                }
                                                onClick={() => {
                                                    if (hasSelected) {
                                                        setPublicationGroup('');
                                                    } else {
                                                        setPublicationGroup(
                                                            group.group_name
                                                        );
                                                    }
                                                }}
                                            >
                                                <p>{group.group_name}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </Body>
                    <Footer>
                        <button
                            onClick={handleCloseModal}
                            className="cancel-button"
                        >
                            Cancelar
                        </button>
                        {!openGroupSelectionArea ? (
                            <button
                                onClick={() => {
                                    if (publicationText === '') {
                                        setPostPubError(true);
                                        setPostPubErrorMessage(
                                            'Conteúdo inválido'
                                        );
                                    } else {
                                        setOpenGroupSelectionArea(true);
                                    }
                                }}
                                className={
                                    publicationText === '' ? 'disabled' : ''
                                }
                            >
                                Avançar
                            </button>
                        ) : (
                            <button type="submit">Publicar</button>
                        )}
                    </Footer>
                </Content>
            </form>
            <Backdrop open={postPubLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <AlertMessageComponent
                message={postPubErrorMessage}
                severity={'error'}
                open={postPubError}
                setOpen={setPostPubError}
            />
        </div>
    );
};

export default PublicationPostComponent;
