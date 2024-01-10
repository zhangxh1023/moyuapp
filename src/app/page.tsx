import HomeContent from '../components/homePage/homeContent/homeContent'
import HotList from '../components/homePage/hotList/hotList'
import RecentlyViewedList from '../components/homePage/recentlyViewedList/recentlyViewedList'
import WebsiteSelector from '../components/homePage/websiteSelector/websiteSelector'

export default function Home() {
  return (
    <main>
      <div className='bg-white'>
        <WebsiteSelector></WebsiteSelector>
        <HomeContent></HomeContent>
      </div>
      <div>
        <RecentlyViewedList></RecentlyViewedList>
        <HotList></HotList>
      </div>
    </main>
  )
}
