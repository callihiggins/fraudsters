import * as React from 'react';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';
import InnerHTML from 'dangerously-set-html-content'

const html = `
<div id='collection-component-1627512936549'></div>
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
      storefrontAccessToken: '0358f38b0ac8783ddbe7b1e01ed93279',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '263744749760',
        node: document.getElementById('collection-component-1627512936549'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
      "product": {
        "styles": {
          "product": {
            "background": "#FFFFFF",
            "padding": "10px",
            "border": "1px solid #000000",
            "width": "28%",
            "max-width": "28%",
            "margin": "20px !important",
            "img": {
              "height": "calc(100% - 15px)",
              "position": "absolute",
              "left": "0",
              "right": "0",
              "top": "0"
            },
            "imgWrapper": {
              "padding-top": "calc(75% + 15px)",
              "position": "relative",
              "height": "0"
        }
      },
      "title": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-weight": "normal",
        "color": "#000000"
      },
      "button": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#000000",
          "color": "#FFDC04",
        },
        "background-color": "#000000",
        "color": "#FFFFFF",
        "font-weight": "700",
        ":focus": {
          "background-color": "#000000",
          "color": "#FFFFFF",
        },
        "padding-left": "18px",
        "padding-right": "18px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "price": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-weight": 700,
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-weight": 700,
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-weight": 700,
        "color": "#000000"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "Details"
    },
    "googleFonts": [
      "PT Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "center",
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modal": {
    "styles": {
      "close": {
        "top": "0",
        "color": "#000000",
        "outline": "0",
        ":hover": {
          "color": "0",
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
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#000000",
          "color": "#FFDC04"
        },
        "color": "#FFFFFF",
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000",
          "color": "#FFDC04"
        },
        "padding-left": "18px",
        "padding-right": "18px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-weight": "700",

        "color": "#000000"
      },
      "price": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "color": "#000000"
      },
      "compareAt": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "color": "#000000"
      },
      "unitPrice": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "color": "#000000"
      },
      "description": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif"
      },
    },
    "googleFonts": [
      "PT Serif"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif"
      },
      "select": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif"
      }
    },
    "googleFonts": [
      "PT Serif"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#FFFFFF",
          "color": "#000000"
        },
        "background-color": "##FFDC04",
        ":focus": {
          "background-color": "#FFFFFF",
          "color": "#000000"
        }
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
        },
        "top": "0",
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
      "title": "Your Cart",
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "PT Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "itc-avant-garde-gothic-pro, sans-serif",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#FFFFFF",
          "color": "#000000"
        },
        ":focus": {
          "background-color": "#FFFFFF",
          "color": "#000000"
        }
      },
      "count": {
        "font-size": "16px"
      }
    },
    "googleFonts": [
      "PT Serif"
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
    <div className={styles.pageContainerClass}>
      <h1 className={styles.pageTitleClass}>Snag Some Fraudsters Swag</h1>
      <div className={styles.containerClass}>
        <InnerHTML html={html} />
      </div>
    </div>
    <Footer />
  </>

export default Merch;
