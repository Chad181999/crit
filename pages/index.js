import Head from "next/head"
import Image from 'next/image'
import mypic from '../asset/images/story-1.png'
import mypic1 from '../asset/images/story-2.png'
import logo1 from '../asset/images/logo1.png'
import logo2 from '../asset/images/logo2.png'
import logo3 from '../asset/images/logo3.png'
import logo4 from '../asset/images/logo4.png'
import logo5 from '../asset/images/logo5.png'
import logo6 from '../asset/images/logo6.png'
import Swiper from "../components/SwiperSlider"
import VerticalSwiper from "../components/vertical"
import Layout from "../components/layout/index"
import Video from "../components/layout/Video"
import Team from "../components/team"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Layout> 
    <main>
      {/* Banner Section */}
        <div className="banner-container">
            <h1 className="violet-banner">CRIT</h1>
            <h2 className="white-banner">NFT Collection</h2>
            <p className ="banner-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lacinia dolor. Cras et lacus sed est pulvinar ornare at at tortor. Suspendisse potenti. Ut elementum tempor erat, volutpat dignissim ipsum tristique sed. Etiam risus nibh, scelerisque a efficitur dignissim, suscipit eu tortor.</p>
            <button>BUY NOW</button> 
        </div>

        {/* Carousel */}
        {/* <div className="carousel-container">
        <h2>featured collection</h2>
        <DemoCarousel/>
        </div> */}

        {/* Carousel Nft */}
        <div className="carousel-container">
        <h2>featured collection</h2>
          <Swiper/>
        </div>

        {/* Story Section */}
        <div className="story-container">
          <div className="david-goliath-nft">
            <div className="content-story-david">
                <h2>david & goliath</h2>
                <p>Sed vestibulum eget diam et tempus. Morbi mauris velit, maximus in blandit eu, molestie accumsan purus. In fermentum tortor non libero mattis varius. Suspendisse potenti. Nullam enim odio, maximus sit amet risus eget, ultricies semper felis. Integer sed magna sapien. Suspendisse consequat arcu vel tortor mattis, id pulvinar mi laoreet. <br></br><br></br>Morbi dapibus leo nisl, sed pretium ante suscipit sit amet. Mauris dui ante, cursus id luctus ut, dignissim id orci. Curabitur augue sapien, condimentum ac velit in, ullamcorper efficitur sem. Suspendisse quis gravida velit. Proin tempus convallis justo, vitae rhoncus velit placerat in. Proin vel vehicula justo, eget dapibus elit. Donec elit sapien, auctor et ultricies sit amet, tincidunt non felis. Cras placerat, urna id convallis molestie, nunc orci luctus diam, a placerat libero urna in sapien. Nam aliquam, mi ac iaculis varius, magna erat dictum dolor, eget luctus nulla nulla ac turpis. Duis volutpat sapien vel blandit ultrices. Donec tempor, quam aliquam consequat rhoncus, tortor risus facilisis nibh, ut consectetur purus est at urna. Aliquam sodales rutrum purus quis sagittis. Sed in est eu sem elementum aliquet ut vel dolor. Sed consectetur faucibus imperdiet. Integer eu elit at magna ultricies imperdiet sed eget mauris.</p>
            </div>
            <div>
            <Image src={mypic}/>
            </div>
          </div>
          <div className="dragon-den-nft">
            <div>
            <Image src={mypic1}/>
            </div>
            <div className="content-story-dragon">
                <h2>dragon den</h2>
                <p>Maecenas pellentesque consequat felis nec rhoncus. Sed tincidunt est ante, eget tempor magna efficitur ut. Quisque fermentum elementum tortor eget molestie. Maecenas cursus tortor at turpis sagittis, ac suscipit nunc venenatis. Mauris sagittis dolor nec felis sollicitudin, eget tempus tortor faucibus. Nullam convallis vitae purus et dignissim. Aenean sollicitudin consectetur aliquet. Donec neque urna, malesuada ac nulla sed, semper tempor sapien. Nam egestas accumsan porttitor. Vestibulum ac nibh turpis. Nullam dignissim risus ligula, et cursus justo tempor ac. Suspendisse mollis odio in diam maximus tristique.</p>
            </div>
          </div>
        </div>

        {/* Vertical Slider */}
        <div className="vertical-container">
        <div class="row-vertical-slider">
          <div class="column1">
            <VerticalSwiper/>
          </div>
          <div class="column2">
          <Image src={mypic}/>
          </div>
        </div>
        </div>

        {/* Video */}
        <Video/>

        {/* Investor */}
        <div className="investor-container">
          <h2 className="investor-title">investors</h2>
          <div className="logo-allignment">
            <div>
                <Image src={logo1}/>
            </div>
            <div>
                <Image src={logo2}/>
            </div>
            <div>
                <Image src={logo3}/>
            </div>
            <div>
                <Image src={logo4}/>
            </div>
            <div>
                <Image src={logo5}/>
            </div>
            <div>
                <Image src={logo6}/>
            </div>
          </div>        
        </div>

        {/* Our Team */}
        <Team/>
        

    </main>
    
  </Layout>
    </div>
  )
}