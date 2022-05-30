import { useState } from 'react'
import findPublicationTagsInTextContentHelper from '../../utils/helpers/find-publication-tags-in-text-content-helper'
import IPublicationPostComponentProps from './interfaces/publication-post-component-props'
import { Body, Content, Footer, Header } from './style'

const PublicationPostComponent = (
    props: IPublicationPostComponentProps
): JSX.Element => {
    const {
        closeModal,
        context: { nickname, profile_picture },
    } = props

    const [publicationText, setPublicationText] = useState('')
    const [publicationTags, setPulicationTags] = useState([])

    const tagsFoundInPost: boolean = publicationTags.length > 0

    const submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
    }

    return (
        <form action="" id="publication-post-form" onSubmit={submitForm}>
            <Content>
                <Header>
                    <img src={profile_picture} alt="Profile Icon" />
                    <div className="header-title">
                        <h1>Criar Publicação</h1>
                        <p>{nickname}</p>
                    </div>
                </Header>
                <Body>
                    <div className="publication-content">
                        <textarea
                            name="publication-text"
                            form="publication-post-form"
                            placeholder="Digite aqui..."
                            value={publicationText}
                            onChange={event => {
                                setPublicationText(event.target.value)

                                setPulicationTags(
                                    findPublicationTagsInTextContentHelper(
                                        event.target.value
                                    ) || []
                                )
                            }}
                        >
                            {publicationText}
                        </textarea>
                        <div className="tags-area">
                            {tagsFoundInPost ? (
                                <ul>
                                    {publicationTags.map(tag => {
                                        return <li>{tag}</li>
                                    })}
                                </ul>
                            ) : (
                                <div className="empty-tags">
                                    <p>
                                        Utilize Tags para relacionar sua
                                        postagem com um assunto específico. Para
                                        adicionar uma Tag a sua publicação,
                                        utilize <b>#</b> ao digitar o texto.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Body>
                <Footer>
                    <button onClick={closeModal} className="cancel-button">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={publicationText === '' ? 'disabled' : ''}
                    >
                        Publicar
                    </button>
                </Footer>
            </Content>
        </form>
    )
}

export default PublicationPostComponent
