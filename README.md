## JSON Setting
`path: /public/json/`

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
* whitepaper: Path
  - 選擇檔案路徑
* video: Url
  - 請放入 Youtube 嵌入語法中的 url, 有設定此屬性, 會彈出視窗展示影片

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
  - title: String
  - description: String