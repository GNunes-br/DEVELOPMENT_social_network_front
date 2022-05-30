import FeedComponent from '../../components/Feed'
import HomeLayout from '../../layout/home'
import pageMock from '../../utils/server/feed-page-mock.json'

const FeedPage = (): JSX.Element => {
    return <HomeLayout child={<FeedComponent />} context={pageMock} />
}

export default FeedPage
