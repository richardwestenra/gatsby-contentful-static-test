# via https://tinyurl.com/contentful-circleci-webhooks

# show verbose log output
set -x

# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
git clone https://github.com/richardwestenra/gatsby-contentful-static-test.git build
cd build
git checkout -b gh-pages origin/gh-pages

# Trigger Gatsby rebuild
cd $CWD
npm run build

# Push newly built repository
cp -r $CWD/public/* /tmp/build 

cd /tmp/build

git config --global user.email "$GH_EMAIL"
git config --global user.name "$GH_NAME"

git add .
git commit -m "Automated build [ci skip]"
git push -f origin gh-pages