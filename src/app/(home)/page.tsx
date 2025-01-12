import { HomeCarousel } from "@/components/shared/home/home-carousel"
import data from "@/lib/data"

const Home = () => {
  return (
    <>
    <HomeCarousel items={data.carousels} />
    {/* <h1 className='h1-bold text-center p-10'>Home Page Content</h1> */}
    </>
  
  )
}

export default Home

