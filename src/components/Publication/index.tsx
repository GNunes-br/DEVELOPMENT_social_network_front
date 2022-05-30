import { useState } from 'react'
import {
    Publication,
    PublicationBody,
    PublicationFooter,
    PublicationHeader,
} from './style'

interface ComponentProps {
    context: {
        date: string
        nickname: string
        profile_picture: string
        profile_route: string
        liked: boolean
        likes: number
        content: string
    }
}

const PublicationComponent = (props: ComponentProps): JSX.Element => {
    const {
        context: {
            liked,
            likes,
            nickname,
            content,
            profile_picture,
            profile_route,
            date,
        },
    } = props

    const [like, setLike] = useState(liked)
    const [likeImageRoute, setLikeImageRoute] = useState(
        liked ? 'liked-icon.svg' : 'not-like-icon.svg'
    )
    const [numbersOfLikes, setNumbersOfLikes] = useState(likes)

    function likedPublication(): void {
        setLike(true)
        setLikeImageRoute('liked-icon.svg')
        setNumbersOfLikes(numbersOfLikes + 1)
    }

    function unlikedPublication(): void {
        setLike(false)
        setLikeImageRoute('not-like-icon.svg')
        setNumbersOfLikes(numbersOfLikes - 1)
    }

    return (
        <Publication>
            <PublicationHeader>
                <div className="profile-info">
                    <img src={profile_picture} alt="Profile Picture" />
                    <a href={profile_route}>
                        <p>{nickname}</p>
                    </a>
                </div>
                <p className="date-and-time">{date}</p>
            </PublicationHeader>
            <PublicationBody>
                <p className="publication-content">{content}</p>
            </PublicationBody>
            <PublicationFooter>
                <div className="like-button">
                    <img
                        className="like-image"
                        src={likeImageRoute}
                        alt=""
                        onClick={() => {
                            if (!like) {
                                likedPublication()
                            } else {
                                unlikedPublication()
                            }
                        }}
                    />
                    <p className="like-count">{numbersOfLikes}</p>
                </div>
            </PublicationFooter>
        </Publication>
    )
}

export default PublicationComponent
