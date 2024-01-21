import HomeContent from '../components/home-page/home-content/home-content'
import WebsiteSelector from '../components/home-page/website-selector/website-selector'

export default function Home() {
  return (
    <main className='bg-white'>
      <WebsiteSelector></WebsiteSelector>
      <HomeContent></HomeContent>
    </main>
  )
}
