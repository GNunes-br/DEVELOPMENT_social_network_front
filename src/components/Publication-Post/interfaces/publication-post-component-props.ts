export default interface IPublicationPostComponentProps {
    closeModal: () => void;
    context: IContext
}

interface IContext {
    nickname: string,
    profile_picture: string
}