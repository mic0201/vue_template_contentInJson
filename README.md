## JSON Setting
`path: /public/json/`

## Link
1. **[HEADER](#headerjson)**
2. **[SECTION_1](#section_1_key-visualjson)**
3. **[SECTION_2](#section_2_introductionjson)**
4. **[SECTION_3](#section__article-with-listjson)**
5. **[SECTION_4](#section__article-with-listjson)**
6. **[SECTION_5](#section__image-walljson)**
7. **[SECTION_6](#section_6_introductionjson)**
8. **[SECTION_7](#section_7_informationWithTabjson)**
9. **[SECTION_8](#header.json)**
10. **[SECTION_9](#header.json)**
11. **[SECTION_10](#header.json)**


### header.json
```
範例
{
  "logo_part1": "LIGHT",
  "logo_part2": "WIRE",
  "menu":[
    {
      "name": "HOME",
      "isList": true,
      "item": [
        {
          "name": "WORKER",
          "link": "https://google.com"
        },
        {
          "name": "WORKER",
          "link": "https://google.com"
        }
                  .
                  .
                  .
      ]
    }
  ]
}
```
* logo_part1: String
  - 無背景
* logo_part2: String
  - 有背景
* menu: Array
  - 選單列
  - * name: String
    - 選單名稱
  - * isList: 是否有子選單 (isTable, isTab 擇一)
  - * isTab: 是否有 Tab 切換 (isList, isTable 擇一)
  - * isTable: 是否為 Table (isTab, isList 擇一)
  - * item: Array
    - 第二層選單, 可能是 List, Tab, Table
  - * tableHeader: Array = String[]
  - * tableBody: Array
  - * tableTip: String
  - * tabHeader: 
  - * tabData: 
* button_text: String
  - 按鈕文案

### section_1_key-visual.json
```
範例：
{
  "mode": "dark",
  "background_image": "/img/section_1_keyVisual/background_image.jpeg",
  "title": [
    "PortaGold, the gold that is portable."
  ],
  "contract_state": ["Available", "Total", "Cap"],
  "contract_method_name": ["balance", "totalSupply", "cap"],
  "description": "Each of us is carving a stone, erecting a column, or cutting a piece of stained glass in the construction of something much bigger than ourselves.",
  "button_name": "Download Whitepaper",
  "whitepaper": "/doc/test.docx",
  "video": "https://www.youtube.com/embed/nJlRzkDR9tU"
}
```
* mode: 'dark' or ''
  - 暗化背景圖片
* background_image: '/img/folder/xxxxxxx.xxx'
  - 請把圖片放在 /img/section_1_keyVisual/ 底下
* title: Array = []
  - 支援輪播
* contract_state: ["Available", "Total", "Cap"]
  - 顯示 Contract State, 與 contract_method_name 要對齊順序,
  - 調整前後順序可以改變 UI
* contract_method_name: ["balance", "totalSupply", "cap"]
  - 請與 contract_state 要對齊順序
* description: String = ''
  - title 底下的文字敘述
* button_name: String = ''
  - 按鈕文字
* whitepaper: Path (與 video 擇一)
  - 選擇檔案路徑
* video: Url (與 whitepaper 擇一)
  - 請放入 Youtube 嵌入語法中的 url, 有設定此屬性, 點擊按鈕, 會彈出視窗展示影片

### section_2_introduction.json
```
範例：
{
  "card": [
    {
      "img": "/img/section_2_introduction/card-img-1.jpg",
      "title": "Pegged to the International Gold Price",
      "description": "GOLD is PortaGold’s proprietary digital certificate, redeemable for 1 troy ounce of gold. The price of GOLD digital certificate is pegged to the LBMA Gold Price."
    },
    {
      "img": "/img/section_2_introduction/card-img-2.jpg",
      "title": "Redeem GOLD for Physical Gold",
      "description": "GOLD holders can exchange their GOLD digital certificate for physical gold.  We will cooperate with local partners such as gold depositories, gold dealers, banks, etc. around the globe."
    },
    {
      "img": "/img/section_2_introduction/card-img-3.jpg",
      "title": "Excess Reserves Mechanism",
      "description": "We have USD 15 million capital to facilitate the  implementation of the PortaGold Project.  And a minimum of USD 2 billion worth of gold deposits to regulate the amount of physical gold reserve."
    }
  ],
  "leading": [
    {
      "icon": "/img/section_2_introduction/leading-img-1.svg",
      "title": "Manufacturing",
      "sub_title": "Sold GOLD digital certificate on our website."
    },
    {
      "icon": "/img/section_2_introduction/leading-img-2.png",
      "title": "Construction",
      "sub_title": "GOLDs are tradable on exchanges and wallets."
    },
    {
      "icon": "/img/section_2_introduction/leading-img-3.svg",
      "title": "Engineering",
      "sub_title": "Complex customer works"
    },
    {
      "icon": "/img/section_2_introduction/leading-img-4.svg",
      "title": "Energy",
      "sub_title": "Sun, oil and gas"
    }
  ]
}
```
* card: Array = []
  - img: Path
    - 圖片路徑
  - title: String
    - 標題
  - description: String  
    - 敘述
* leading: Array = []
  - icon: Path
    - ICON 路徑
  - title: String
    - 標題
  - sub_title: String
    - 小標題

### section_*_article-with-list.json
```
範例：
{
  "title": "Excess Reserves Mechanism",
  "description": "Always Backed by Assets with Value Exceeding the Value of GOLD Issuance",
  "list": [
    {
      "content": "USD 15 Million Upfront Cash as Capital",
      "active": false
    },
    {
      "content": "Gold Deposits that Worth at Least USD 2 Billion to Regulate Gold Reserve. Download Report",
      "active": false,
      "link": "/doc/test.docx"
    },
    {
      "content": "Renovable products from the scratch",
      "active": false
    },
    {
      "content": "State of art metal roofing",
      "active": false
    },
    {
      "content": "Great experts from all the world",
      "active": false
    },
    {
      "content": "Home and skyscraper constructions",
      "active": false
    }
  ]
}
```
* title: String
  - 標題
* description: String
  - 敘述
* list: Array = []
  - content: String
    - 內容
  - active: Boolean (必要屬性)
    - 請設定 false
  - link: Path
    - 檔案路徑, 有此屬性會開啟超連結

### section_*_image-wall.json
```
範例：
{
  "image1": "/img/section_3_image-wall/image-1.jpg",
  "image2": "/img/section_3_image-wall/image-2.jpg",
  "image3": "/img/section_3_image-wall/image-3.jpg",
  "multiple": true,
  "card": {
    "title": "TOP QUALITY",
    "sub_title": "FOR ALL OUR PRODUCTS",
    "description": "As an investment, quality building materials work in conjunction with other aspects of a building. Quality materials are the top.",
    "button_text": "GUARANTEED"
  }
}
```
* image1: Path
* image2: Path
* image3: Path
* mutiple: Boolean
  - 有無多圖片, 設定為 true, 支援三張圖片, 設定為 false, 只會抓取 image1
* card: Object
  - 若 mutiple 為 false, 則可設定 card
  - title: String
  - sub_title: String
  - description: String
  - button_text: String

### section_*_article-with-action.json
```
範例：
{
  "background_image": "/img/section_5_article-with-action/background.jpg",
  "title": "LET BUILD TOGETHER",
  "description": "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "data": [
    {
      "icon": "",
      "value": "850034",
      "title": "SQUARE METERS BUILT"
    },
    {
      "icon": "",
      "value": "125000",
      "title": "WORKED WITH US"
    }
  ],
  "button_text": "JOIN OUR TEAM"
}
```
* background_image: Path
* title: String
* description: String
* data: Array
  - icon: ""
    - 請直接更換 /img/section_*_article_with_action/ 內的 icon1, icon2, iconInbutton.svg
    - 檔名不可更改, 只能使用 svg
  - value: Sting or Number
  - title: String
* button_text: String

### section_6_introduction.json
```
範例：
{
  "title": "INTERNATIONAL SCALE",
  "description": "We believe in making it easier for organisations to work and grow on an international scale",
  "card": [
    {
      "icon": "",
      "title": "LEADERSHIP",
      "description": "Purus expedita fusce temporibus est odit mi quoeliquid sempere",
      "back_side": "Interdum iusto pulvinar consequuntur augue optio, repellat fuga! Purus expedita fusce temporibus est odit mi quos? Aliquid semper, veritatis dignissimos."
    },
    {
      "icon": "",
      "title": "VISION",
      "description": "Purus expedita fusce temporibus est odit mi quoeliquid sempere",
      "back_side": "Interdum iusto pulvinar consequuntur augue optio, repellat fuga! Purus expedita fusce temporibus est odit mi quos? Aliquid semper, veritatis dignissimos."
    },
    {
      "icon": "",
      "title": "CORE VALUES",
      "description": "Purus expedita fusce temporibus est odit mi quoeliquid sempere",
      "back_side": "Interdum iusto pulvinar consequuntur augue optio, repellat fuga! Purus expedita fusce temporibus est odit mi quos? Aliquid semper, veritatis dignissimos."
    }
  ]
}
```
* title: String
* description: String
* card: Array
  - icon: ""
    - 請直接更換 /img/section_6_introduction/ 內的 section-6-1, section-6-2, section-6-3
  - title: String
  - description: String
  - back_side: String
    - 滑鼠移過去後的文字顯示

### section_7_informationWithTab.json
```
範例：
{
  "tab_header": [
    "BUILDINGS",
    "INTERIORS",
    "HOMES",
    "OTHER PRODUCTS"
  ],
  "tab": {
    "BUILDINGS": {
      "title": "GOLD Digital Certificate",
      "description": "The PortaGold project’s GOLD digital certificate is created using smart contract protocol on the Ethereum blockchain",
      "score_header": ["GOLD Issued", "GOLD Price", "GOLD Distributed", "Market Cap"],
      "score": {
        "GOLD Issued": 20,
        "GOLD Price": 20,
        "GOLD Distributed": 30,
        "Market Cap": 50
      },
      "attachment": {}
    }
  }
}
```
* tab_header: Array
  - 原支援多 tab, 現在 tab 功能暫且隱藏, 保留設定以增加彈性
  - 預設 tab_header = [ "BUILDINGS" ] (勿更改)
* tab: Object
  - title: String
  - description: String
  - score_header: Array
    - 標題, 會影響順序
  - score: Object
    - GOLD Issued
    - GOLD Price
    - GOLD Distributed
    - Market Cap
      - 以上四個會抓取合約狀態
    - attachment: Object
      - image: Path
        - 右上角會多顯示圖片, 若有設定 video, 則該圖上面會多出播放按鈕
      - video: Url
        - 右上角會多顯示按鈕, 點擊後跳出浮動視窗觀看影片
  
### section_8_cooperation.json
```
範例：
{
  "row": [
    {
      "title": "GOLD is tradable on these exchanges",
      "logo": [
        {
          "image": "img/section_8_cooperation/logo-1.png",
          "link": "https://www.google.com"
        },
        {
          "image": "img/section_8_cooperation/logo-2.png",
          "link": "https://www.google.com"
        }
                            .
                            .
                            .
      ]
    },
    {
      "title": "GOLD can be exchanged to physical gold on these places",
      "logo": [
        {
          "image": "img/section_8_cooperation/logo-1.png",
          "link": "https://www.google.com"
        },
        {
          "image": "img/section_8_cooperation/logo-2.png",
          "link": "www.google.com"
        }
                                .
                                .
                                .
      ]
    }
  ]
}
```
* row: Array
  - title: 大標題
  - logo: Array
    - image: Path
    - link: Url

### section_9_article-with-action.json
```
{
  "background_image": "/img/section_9_article-with-action/background.jpg",
  "title": "LET'S DISCUSS WITH US",
  "description": "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "data": [
    {
      "icon": "",
      "value": "850034",
      "title": "Lorem ipsum doler apmo"
    },
    {
      "icon": "",
      "value": "Money back ipsum apmo",
      "title": "Easy payments"
    }
  ],
  "button_icon": "",
  "button_text": "GET IN TOUCH NOW"
}
```
* background_image: Url
* title: String
* description: String
* data: Array
  - icon: ""
    - 請直接更改 /img/section_9_article-with-action/ 內的 icon1, icon2
  - value: String
  - title: String
* button_icon: String
  - 請直接更改 /img/section_9_article-with-action/ 內的 iconInButton
* button_text: String
  - 按鈕文案

### section_10_team.json
```
範例：
{
  "title": "OUR CREATIVE TEAM",
  "description": "Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
  "member": [
    {
      "image": "/img/section_10_team/team-1.jpg",
      "name": "JACK CHRISTIAN",
      "title": "DIRECTOR",
      "description": "Lorem Ipsum is simply dummy text of the printing and",
      "social": [
        {
          "name": "facebook",
          "link": "https://www.google.com"
        },
        {
          "name": "twitter",
          "link": "https://www.google.com"
        },
        {
          "name": "telegram",
          "link": "https://www.google.com"
        }
      ]
    },
                        .
                        .
                        .
  ]
}
```
* title: String
* description: Dtring
* member: Array
  - image: Path
  - name: String
  - title: String
  - description: String
  - social: Array
    - name: String
    - link: Url

### section_11_twitter-wall.json
```
{
  "commentList": [
    {
      "image": "/img/section_11_twitter-wall/image-1.jpg",
      "description": "@jackmccw @acccgovau Sustainability is our key focuses. If you’d like to opt-out of receiving future deliveries, yo…",
      "url": "https://t.co/5SIHvhSuob",
      "date": "May/19/2017"
    },
    {
      "image": "/img/section_11_twitter-wall/image-2.jpg",
      "description": "@Jimmyholster @EPA_Victoria Apologies. This is not YP's policy and we'll ensure that the situation is dealt with. P…",
      "url": "https://t.co/hP2L6Jo7eI",
      "date": "May/18/2017"
    }
                                .
                                .
                                .
  ]
}
```
* commentList: Array
  - 支援輪播
  - image: Path
  - description: String
    - 支援 @標註人名 以及 #Hashtag
  - url: Url
  - date: String

### footer.json
```
範例：
{
  "left": {
    "logo_part1": "LIGHT",
    "logo_part2": "WIRE",
    "description": "We are the leaders in the construction and building industries. We are world wide. We never give up on the new challenges. Get in touch now!",
    "social": [
      {
        "name": "twitter",
        "link": "https://www.google.com"
      },
      {
        "name": "telegram",
        "link": "https://www.google.com"
      },
      {
        "name": "medium",
        "link": "https://www.google.com"
      }
    ]
  },
  "mid": {
    "tree": [
      {
        "title": "USEFUL RESOURCES",
        "node": [
          {
            "name": "HOME",
            "link": "https://www.google.com"
          },
          {
            "name": "ABOUT US",
            "link": "https://www.google.com"
          },
          {
            "name": "SUBSCRIBE NOW",
            "link": "https://www.google.com"
          },
          {
            "name": "CONTACTS",
            "link": "https://www.google.com"
          },
          {
            "name": "OUR PARTNERS",
            "link": "https://www.google.com"
          },
          {
            "name": "TEAM AND MEMBERS",
            "link": "https://www.google.com"
          }
        ]
      },
      {
        "title": "OUR COMPANY",
        "node": [
          {
            "name": "TECH LAB",
            "link": "https://www.google.com"
          },
          {
            "name": "COMPANY HISTORY",
            "link": "https://www.google.com"
          },
          {
            "name": "SUPPORT AREA",
            "link": "https://www.google.com"
          },
          {
            "name": "CONTACTS",
            "link": "https://www.google.com"
          },
          {
            "name": "OUR PARTNERS",
            "link": "https://www.google.com"
          },
          {
            "name": "TEAM AND MEMBERS",
            "link": "https://www.google.com"
          }
        ]
      }
    ]
  },
  "right": {
    "title": "OUR PROMISE TO YOU",
    "list": [
      "Free QUoute Delivery",
      "No Hassle Refund Policy",
      "Considerate scheme",
      "Safe verified methods"
    ],
    "pay_methods": [
      "/img/footer/visa.png",
      "/img/footer/visa.png",
      "/img/footer/visa.png",
      "/img/footer/visa.png",
      "/img/footer/visa.png"
    ]
  }
}
```
* left
  - logo_part1: String
  - logo_part2: String
  - description: String
  - social: Array
    - name: String
    - link: Url
* mid
  - 搜尋列以及樹狀圖
  - tree: Array
    - title: String
    - node: Array
* right
  - title: String
  - list: Array
  - pay_methods: Array
    - image Path