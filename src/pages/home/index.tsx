import FeedComponent from '../../components/Feed'
import HomeLayout from '../../layout/home'

const HomePage = (): JSX.Element => {
    return <HomeLayout context={<FeedComponent />} />
}

export default HomePage
