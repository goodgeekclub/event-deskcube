
export AWS_PROFILE=gg-admin
echo "=== TEST List AWS_S33 ==="
aws s3 ls
echo "=== TEST List AWS_S33 ==="
for i in {1..10}; do
  printf '.'
  sleep 1
done

echo "=== Angular build Pre-Render ==="

npm run prerender

aws s3 sync dist/gg-deskcube/browser deskcube.io --delete
#cp docs/index.html docs/404.html
echo "AWS S3 is synced"
echo "Waiting S3 Cached for 5 second"
sleep 5
echo "Invalidate Cloudfront"
aws cloudfront create-invalidation --distribution-id E2K94A2WMRDWO --paths "/"
echo "=== Finish Deploy==="
