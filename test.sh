rm -fr mica-gold/ micaGold.zip
yarn build
mv dist mica-gold
zip -r micaGold.zip mica-gold/