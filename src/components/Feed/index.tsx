import { Modal } from '@mui/material'
import React, { useState } from 'react'
import serverMock from '../../utils/server/feed-publications.json'
import PublicationComponent from '../Publication'
import PublicationPostComponent from '../Publication-Post'
import { Feed, FloatingButton, Publications } from './style'

const FeedComponent = (): JSX.Element => {
    const feedPublications: Array<any> = serverMock.data

    const [addPubIcon, setAddPubIcon] = useState('denounce-icon.svg')
    const [open, setOpen] = useState(false)

    const setAddIcon = () => setAddPubIcon('add-icon.svg')
    const setDenounceIcon = () => setAddPubIcon('denounce-icon.svg')
    const openPublicationPostModal = () => setOpen(true)
    const closePublicationPostModal = () => setOpen(false)

    return (
        <Feed>
            <Publications>
                {feedPublications.map(publication => {
                    const { id } = publication

                    return (
                        <PublicationComponent key={id} context={publication} />
                    )
                })}
            </Publications>
            <FloatingButton>
                <button
                    onClick={openPublicationPostModal}
                    onMouseOver={setAddIcon}
                    onMouseOut={setDenounceIcon}
                >
                    <img src={addPubIcon} alt="" />
                </button>
            </FloatingButton>
            <Modal open={open} onClose={closePublicationPostModal}>
                <PublicationPostComponent
                    closeModal={closePublicationPostModal}
                    context={{
                        nickname: 'GNunesBr',
                        profile_picture: 'not-profile-picture-icon.svg',
                    }}
                />
            </Modal>
        </Feed>
    )
}

export default FeedComponent
