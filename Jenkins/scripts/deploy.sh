#! /usr/bin/env sh

echo 'Changing to project directory...'
cd /var/www/apparicio.me/html
echo 'Pulling changes from origin/master...'
git pull origin master
echo 'Done pulling changes from origin master.'
echo 'Deployment complete.'
