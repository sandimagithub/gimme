source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.7'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'twitter-bootstrap-rails', '~> 3.2.0'

gem 'omniauth-facebook'
gem "figaro"

gem 'simple_form'

group :test, :development do
  # rspec for rails
  gem 'rspec-rails'
  # make reusable model factories for your tests
  gem 'factory_girl_rails'
  # fill stuff in in forms and stuff
  gem 'capybara'
  # open a page after a test
  gem 'launchy'
  # will let us run tests automatically
  gem 'guard-rspec'
  # notifications
  gem 'rb-fsevent' if `uname` =~ /Darwin/
end

group :test do
  # all sorts of great matchers for rspec
  gem 'shoulda-matchers'
end

group :development do
  # just awesome-looking errors
  gem 'better_errors'
  # let's be able to debug with pry in rails
  gem 'pry-rails'
  # omg. this is better than butter on sliced bread.
  gem 'pry-byebug'
end
gem 'handlebars_assets'
