# Quiz Master
## Setup
```
# clone repo
git clone https://github.com/pipopotamasu/quiz-master.git

# change repo dir
cd quiz-master

# install dependencies
bundle install
yarn install

# initial data
rails db:seed

# start server
rails s
## user site
http://0.0.0.0:3000/
## admin site
http://0.0.0.0:3000/admin

# testing
bundle exec rspec
yarn run test
```
