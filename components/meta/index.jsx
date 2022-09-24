import Head from 'next/head'
import PropTypes from 'prop-types';


let defaultMeta = {
    title: "KLINK Ecommerce",
    description:"GWe are a leading System Integration Provider in Myanmar.We are setting the industry standard by providing clients with exceptional levels of service, support and high-quality IT System, security & data solutions throughout Myanmar.",
    keywords: "KLINK, KINK ECOMMERCE, klinkecommerce, klink enterprise, klink, klinkenterprise, KLINK products, KLINK ENTERPRISE, klink enterprise",
    url: "https://klink-ecommerce.vercel.app/",
    image: "/assets/klink-fav.webp",
    ogimage: "/assets/klink-meta-img.webp"
};

const Meta = ({ meta = defaultMeta }) =>{
    return(
        <Head>
            <title>{meta.title}</title>
            <meta name="title" content={meta.title} />
            <meta name="robots" content="index" />
            <meta name="google-site-verification" content="lt2KD97W6zCJHumr4ckLHj-3cMOvWcJl30mKEJiglz8" />
            <link rel="icon" type="image/png" href={meta.image} sizes="16x16" />

            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={meta.url} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.ogimage} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={meta.url} />
            <meta property="twitter:title" content={meta.title} />
            <meta property="twitter:description" content={meta.description} />
            <meta property="twitter:image" content={meta.ogimage} />
            
        </Head>
    );
};

export default Meta;

PropTypes.Meta = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    ogimage: PropTypes.string,
};