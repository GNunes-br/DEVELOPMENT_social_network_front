import { useState } from 'react';
import { api } from '../../services/api';
import AlertMessageComponent from '../AlertMessage';
import { Body, Content, Footer, Header } from './style';

const PublicationComponent = (props: any): JSX.Element => {
    const {
        context: {
            id_publication,
            liked,
            likes,
            group_name,
            content,
            date,
            tags,
        },
    } = props;

    const [like, setLike] = useState(liked);
    const [likeImageRoute, setLikeImageRoute] = useState(
        liked ? 'liked-icon.svg' : 'not-like-icon.svg'
    );
    const [numbersOfLikes, setNumbersOfLikes] = useState(likes);

    const [likeOrUnlikeError, setLikeOrUnlikeError] = useState(false);
    const [likeOrUnlikeErrorMessage, setLikeOrUnlikeErrorMessage] =
        useState('');

    const submitForm = async (): Promise<void> => {
        setLikeOrUnlikeError(false);

        await api
            .post('/publication_like', {
                idPublication: id_publication,
            })
            .catch(error => {
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message;
                    setLikeOrUnlikeErrorMessage(errorMessage);
                } else {
                    setLikeOrUnlikeErrorMessage('Algo inesperado aconteceu!');
                }
                setLikeOrUnlikeError(true);
            });
    };

    function likedPublication(): void {
        setLike(true);
        setLikeImageRoute('liked-icon.svg');
        setNumbersOfLikes(numbersOfLikes + 1);
        submitForm();
    }

    function unlikedPublication(): void {
        setLike(false);
        setLikeImageRoute('not-like-icon.svg');
        setNumbersOfLikes(numbersOfLikes - 1);
        submitForm();
    }

    return (
        <div>
            <Content>
                <Header>
                    <div className="group-info">
                        <p>{group_name}</p>
                    </div>
                    <p className="date-and-time">{date}</p>
                </Header>
                <Body>
                    <p className="publication-content">{content}</p>
                    {tags.length ? (
                        <div className="publication-tags">
                            <ul>
                                {tags.map((tag: { text: string }) => {
                                    return <li key={tag.text}>{tag.text}</li>;
                                })}
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </Body>
                <Footer>
                    <div className="like-button">
                        <img
                            className="like-image"
                            src={likeImageRoute}
                            alt=""
                            onClick={() => {
                                if (!like) {
                                    likedPublication();
                                } else {
                                    unlikedPublication();
                                }
                            }}
                        />
                        <p className="like-count">{numbersOfLikes}</p>
                    </div>
                </Footer>
            </Content>
            <AlertMessageComponent
                message={likeOrUnlikeErrorMessage}
                severity={'error'}
                open={likeOrUnlikeError}
                setOpen={setLikeOrUnlikeError}
            />
        </div>
    );
};

export default PublicationComponent;
