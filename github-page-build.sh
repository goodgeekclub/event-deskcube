
npm run prerender
rm -rf docs
cp -r dist/gg-deskcube/browser docs
cp docs/index.html docs/404.html
echo "Finish"
