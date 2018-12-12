rm -fr mica-gold/ micaGold.zip
yarn build
mv dist mica-gold
zip -r micaGold.zip mica-gold/

scp micaGold.zip ubuntu@54.248.213.239:/home/ubuntu
ssh ubuntu@54.248.213.239 sudo bash /home/ubuntu/cpGold.sh