export interface IHomeLayoutProps {
    child: JSX.Element,
    context: IContext
}

interface IContext {
    nickname: string,
    profile_picture: string
}