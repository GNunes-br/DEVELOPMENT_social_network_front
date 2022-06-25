import { useState } from 'react';
import { Body, Content, Footer, Header } from './style';

const PublicationComponent = (props: any): JSX.Element => {
    const {
        context: { liked, likes, group, content, group_route, date, tags },
    } = props;

    const [like, setLike] = useState(liked);
    const [likeImageRoute, setLikeImageRoute] = useState(
        liked ? 'liked-icon.svg' : 'not-like-icon.svg'
    );
    const [numbersOfLikes, setNumbersOfLikes] = useState(likes);

    function likedPublication(): void {
        setLike(true);
        setLikeImageRoute('liked-icon.svg');
        setNumbersOfLikes(numbersOfLikes + 1);
    }

    function unlikedPublication(): void {
        setLike(false);
        setLikeImageRoute('not-like-icon.svg');
        setNumbersOfLikes(numbersOfLikes - 1);
    }

    return (
        <Content>
            <Header>
                <div className="group-info">
                    <p>
                        <a href={group_route}> {group}</a>
                    </p>
                </div>
                <p className="date-and-time">{date}</p>
            </Header>
            <Body>
                <p className="publication-content">{content}</p>
                {tags.length ? (
                    <div className="publication-tags">
                        <ul>
                            {tags.map((tag: string) => {
                                return <li key={tag}>{tag}</li>;
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
    );
};

export default PublicationComponent;
