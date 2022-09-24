import ItemDisplays from '../components/items-display';
import Meta from '../components/meta'
import NavBar from '../components/navbar'

export default function Home() {

  let meta = {
    title: "Home | KLINK Ecommerce",
    description:"GWe are a leading System Integration Provider in Myanmar.We are setting the industry standard by providing clients with exceptional levels of service, support and high-quality IT System, security & data solutions throughout Myanmar.",
    keywords: "KLINK, KINK ECOMMERCE, klinkecommerce, klink enterprise, klink, klinkenterprise, KLINK products, KLINK ENTERPRISE, klink enterprise",
    url: "https://klink-ecommerce.vercel.app/",
    image: "/assets/klink-fav.webp",
    ogimage: "/assets/klink-meta-img.webp"
};

  return (
    <div className='homeWrapper'>
      <Meta meta={meta}/>
      <NavBar/>
      <ItemDisplays/>
    </div>
  )
}
