import * as React from 'react';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';
import InnerHTML from 'dangerously-set-html-content'

const html = `
<div id='collection-component-1737476422479'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'fraudsters-lpn.myshopify.com',
      storefrontAccessToken: '48102698857a946222963306aa44c0af',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '263744749760',
        node: document.getElementById('collection-component-1737476422479'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        }
      },
      "title": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "20px",
        "color": "#000000"
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#02aba3"
        },
        "background-color": "#02beb5",
        ":focus": {
          "background-color": "#02aba3"
        },
        "border-radius": "40px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "17px",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "14.45px",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "14.45px",
        "color": "#000000"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View more"
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#02aba3"
        },
        "background-color": "#02beb5",
        ":focus": {
          "background-color": "#02aba3"
        },
        "border-radius": "40px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#000000"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#000000"
      },
      "description": {
        "color": "#393939"
      }
    },
    "googleFonts": [
      "Montserrat"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {
    "styles": {
      "label": {
        "color": "#000000"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#02aba3"
        },
        "background-color": "#02beb5",
        ":focus": {
          "background-color": "#02aba3"
        },
        "border-radius": "40px"
      },
      "title": {
        "color": "#000000"
      },
      "header": {
        "color": "#000000"
      },
      "lineItems": {
        "color": "#000000"
      },
      "subtotalText": {
        "color": "#000000"
      },
      "subtotal": {
        "color": "#000000"
      },
      "notice": {
        "color": "#000000"
      },
      "currency": {
        "color": "#000000"
      },
      "close": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "empty": {
        "color": "#000000"
      },
      "noteDescription": {
        "color": "#000000"
      },
      "discountText": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "discountAmount": {
        "color": "#000000"
      }
    },
    "text": {
      "title": "Shopping Cart",
      "total": "Subtotal",
      "empty": "Your cart is empty, add some Fraudstan merch!",
      "button": "Checkout",
      "noteDescription": "Leave a note for the Fraudsters team!"
    },
    "contents": {
      "note": true
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "background-color": "#02beb5",
        ":hover": {
          "background-color": "#02aba3"
        },
        ":focus": {
          "background-color": "#02aba3"
        }
      },
      "count": {
        "font-size": "18px"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000000"
      },
      "title": {
        "color": "#000000"
      },
      "price": {
        "color": "#000000"
      },
      "fullPrice": {
        "color": "#000000"
      },
      "discount": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "quantity": {
        "color": "#000000"
      },
      "quantityIncrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityDecrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityInput": {
        "color": "#000000",
        "border-color": "#000000"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>
`;

export const Merch = () => 
  <>
    <PageHelmet />
    <Nav />
    <div css={styles.pageContainerClass}>
      <h1 css={styles.pageTitleClass}>Snag Some Fraudsters Swag</h1>
      <div css={styles.containerClass}>
        <InnerHTML html={html} />
      </div>
    </div>
    <Footer />
  </>

export default Merch;
