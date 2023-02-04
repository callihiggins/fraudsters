import * as React from "react"
import { Helmet } from 'react-helmet';
import SITE_IMAGE from '../images/icon.png'



const PageHelmet = ({ keywords, title, image }) => {
  let PAGE_TITLE = 'Fraudsters: The True-Crime, Comedy Podcast';
  let PAGE_KEYWORDS = ['fraudsters', 'seena ghaznavi', 'justin williams', 'scam', 'true crime', 'podcast', 'last podcast network',  'comedy' ];
  const PAGE_DESCRIPTION = 'Fraudsters is podcast about liars, cheaters, and scammers hosted by Seena Ghaznavi and Justin Williams.';
  
  const POD_URL = 'https://fraudsters.fm';
  PAGE_KEYWORDS = keywords ? PAGE_KEYWORDS.concat(keywords) : PAGE_KEYWORDS;
  PAGE_TITLE = title ? title : PAGE_TITLE; 
  const SOCIAL_IMAGE = image ? image : SITE_IMAGE;
  return (
    <>
      <Helmet title={PAGE_TITLE}>
        <meta name="keywords" content={PAGE_KEYWORDS}></meta>
        <meta name="description" content={PAGE_DESCRIPTION}></meta>
        <meta name="google-site-verification" content="xOk8hnImEIO8-KaJ5hYjhNRXhE-eBDRLYW0tLF1Nbik" />
        <link rel="shortcut icon" type="image/x-icon" href={SOCIAL_IMAGE}/>
        <link rel="canonical" href={POD_URL}/>
        <meta property="og:site_name" content="Fraudsters"/>
        <meta property="og:title" content={PAGE_TITLE}/>
        <meta property="og:url" content={POD_URL}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={PAGE_DESCRIPTION}/>
        <meta property="og:image" content={SOCIAL_IMAGE}/>
        <meta property="og:image:width" content="1080"/>
        <meta property="og:image:height" content="1080"/>
        <meta itemprop="name" content={PAGE_TITLE}/>
        <meta itemprop="url" content={POD_URL}/>
        <meta itemprop="description" content={PAGE_DESCRIPTION}/>
        <meta itemprop="thumbnailUrl" content={SOCIAL_IMAGE}/>
        <link rel="image_src" href={SOCIAL_IMAGE} />
        <meta itemprop="image" content={SOCIAL_IMAGE}/>
        <meta name="twitter:title" content={PAGE_TITLE}/>
        <meta name="twitter:image" content={SOCIAL_IMAGE}/>
        <meta name="twitter:url" content={POD_URL}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content={PAGE_DESCRIPTION}/>
        <meta name="description" content={PAGE_DESCRIPTION}/>
      </Helmet>
    </>
  )
}

export default PageHelmet;