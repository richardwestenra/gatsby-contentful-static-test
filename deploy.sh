# via https://tinyurl.com/contentful-circleci-webhooks

# show verbose log output
set -x

# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
git clone git@github.com:richardwestenra/gatsby-contentful-static-test.git build
cd build
git remote -v
git fetch origin
git checkout -b gh-pages origin/gh-pages # If not using master

# Trigger Gatsby rebuild
cd $CWD
npm run build

# Push newly built repository
cp -r $CWD/public/* /tmp/build 

cd /tmp/build

git config --global user.email "$GH_EMAIL"
git config --global user.name "$GH_NAME"

git add .
git commit -m "Automated build"
git push -f origin gh-pages