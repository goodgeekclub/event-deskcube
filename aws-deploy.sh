# Setup Variable
aws_profile="gg-admin"
dist="dist/gg-deskcube/browser"
bucket="s3://deskcube.io"
cfId="E2K94A2WMRDWO"

# Script
export AWS_PROFILE=$aws_profile
echo "=== TEST List AWS_S3 ==="
aws s3 ls
echo "=== TEST List AWS_S3 ==="
for i in {1..10}; do
  printf '.'
  sleep 1
done

echo "=== Angular build Pre-Render ==="
npm run prerender
aws s3 sync $dist $bucket --delete --cache-control max-age=31536000
echo "AWS S3 is synced"
echo "Waiting S3 Cached for 5 second"
sleep 5
echo "Invalidate Cloudfront"
aws cloudfront create-invalidation --distribution-id $cfId --paths "/*"
echo "=== Finish Deploy==="

# Finish
