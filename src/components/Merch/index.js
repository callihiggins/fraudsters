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
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
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
        "font-family": "PT Serif, serif",
        "font-weight": "normal",
        "color": "#004564"
      },
      "button": {
        "font-family": "PT Serif, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#da615c"
        },
        "background-color": "#f26c66",
        ":focus": {
          "background-color": "#da615c"
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
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "color": "#004564"
      },
      "compareAt": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "color": "#004564"
      },
      "unitPrice": {
        "font-family": "PT Serif, serif",
        "font-weight": "bold",
        "color": "#004564"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "PT Serif"
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
        "font-family": "PT Serif, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#da615c"
        },
        "background-color": "#f26c66",
        ":focus": {
          "background-color": "#da615c"
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
        "font-family": "PT Serif, serif",
        "font-weight": "normal",
        "color": "#004564"
      },
      "price": {
        "font-family": "PT Serif, serif",
        "color": "#004564"
      },
      "compareAt": {
        "font-family": "PT Serif, serif",
        "color": "#004564"
      },
      "unitPrice": {
        "font-family": "PT Serif, serif",
        "color": "#004564"
      },
      "description": {
        "font-family": "PT Serif, serif"
      }
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
        "font-family": "PT Serif, serif"
      },
      "select": {
        "font-family": "PT Serif, serif"
      }
    },
    "googleFonts": [
      "PT Serif"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "PT Serif, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#da615c"
        },
        "background-color": "#f26c66",
        ":focus": {
          "background-color": "#da615c"
        }
      },
      "title": {
        "color": "#004564"
      },
      "header": {
        "color": "#004564"
      },
      "lineItems": {
        "color": "#004564"
      },
      "subtotalText": {
        "color": "#004564"
      },
      "subtotal": {
        "color": "#004564"
      },
      "notice": {
        "color": "#004564"
      },
      "currency": {
        "color": "#004564"
      },
      "close": {
        "color": "#004564",
        ":hover": {
          "color": "#004564"
        }
      },
      "empty": {
        "color": "#004564"
      },
      "noteDescription": {
        "color": "#004564"
      },
      "discountText": {
        "color": "#004564"
      },
      "discountIcon": {
        "fill": "#004564"
      },
      "discountAmount": {
        "color": "#004564"
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
        "font-family": "PT Serif, serif",
        "background-color": "#f26c66",
        ":hover": {
          "background-color": "#da615c"
        },
        ":focus": {
          "background-color": "#da615c"
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
        "color": "#004564"
      },
      "title": {
        "color": "#004564"
      },
      "price": {
        "color": "#004564"
      },
      "fullPrice": {
        "color": "#004564"
      },
      "discount": {
        "color": "#004564"
      },
      "discountIcon": {
        "fill": "#004564"
      },
      "quantity": {
        "color": "#004564"
      },
      "quantityIncrement": {
        "color": "#004564",
        "border-color": "#004564"
      },
      "quantityDecrement": {
        "color": "#004564",
        "border-color": "#004564"
      },
      "quantityInput": {
        "color": "#004564",
        "border-color": "#004564"
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
    <div className={styles.pageContainerClass}>
      <Nav />
      <h1 className={styles.pageTitleClass}>Merch</h1>
      <div css={styles.containerClass}>
        <InnerHTML html={html} />
      </div>
    </div>
    <Footer />
  </>

export default Merch;
