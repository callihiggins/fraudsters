import * as React from "react"
import { Helmet } from 'react-helmet';
import SITE_IMAGE from '../images/icon.png'

let PAGE_TITLE = 'Fraudsters: The True-Crime, Comedy Podcast';
let PAGE_KEYWORDS = ['scam', 'true crime', 'podcast', 'last podcast network', 'seena ghaznavi', 'justin williams', 'comedy' ];
const DESCRIPTION = 'Fraudsters is an all-you-can-eat buffet of liars, cheaters, and scammers. We cover every flavor of fraud you can imagine from fake psychic hotlines to corporations cookin’ the books. This podcast is a collaboration between Zerocool Media and the Last Podcast Network. Hosted by Seena Ghaznavi and Justin Williams. Produced by Hazel Bryan. Theme music by Simon TaufiQue. Find us on Instagram or Twitter @FraudstersLPN Email us with your thoughts at Fraudsterslpn@gmail.com';
const POD_URL = 'https://fraudsters.fm';

const PageHelmet = ({ keywords, title }) => {
  PAGE_KEYWORDS = keywords ? PAGE_KEYWORDS.concat(keywords) : PAGE_KEYWORDS;
  PAGE_TITLE = title ? title : PAGE_TITLE; 
  return (
    <>
      <Helmet title={PAGE_TITLE}>
        <meta name="keywords" content={PAGE_KEYWORDS}></meta>
        <meta name="description" content={DESCRIPTION}></meta>
        <link rel="shortcut icon" type="image/x-icon" href={SITE_IMAGE}/>
        <link rel="canonical" href={POD_URL}/>
        <meta property="og:site_name" content="Fraudsters"/>
        <meta property="og:title" content={PAGE_TITLE}/>
        <meta property="og:url" content={POD_URL}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={DESCRIPTION}/>
        <meta property="og:image" content={SITE_IMAGE}/>
        <meta property="og:image:width" content="1080"/>
        <meta property="og:image:height" content="1080"/>
        <meta itemprop="name" content={PAGE_TITLE}/>
        <meta itemprop="url" content={POD_URL}/>
        <meta itemprop="description" content={DESCRIPTION}/>
        <meta itemprop="thumbnailUrl" content={SITE_IMAGE}/>
        <link rel="image_src" href={SITE_IMAGE} />
        <meta itemprop="image" content={SITE_IMAGE}/>
        <meta name="twitter:title" content={PAGE_TITLE}/>
        <meta name="twitter:image" content={SITE_IMAGE}/>
        <meta name="twitter:url" content={POD_URL}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content={DESCRIPTION}/>
        <meta name="description" content={DESCRIPTION}/>
      </Helmet>
    </>
  )
}

export default PageHelmet;