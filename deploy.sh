#/bin/bash

# build it
ng build --prod

# upload files
aws s3 cp ./dist s3://ng-toast --recursive --acl public-read

# invalidate index.html to flush cached
aws cloudfront create-invalidation --distribution-id E1G5WWA5KWD4V4 --paths /index.html

# the site:  https://d1tvusdnpaxvbt.cloudfront.net
