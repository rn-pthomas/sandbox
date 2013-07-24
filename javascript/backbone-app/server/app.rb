require 'sinatra'
require 'sinatra/activerecord'
require 'json'

# Database setup
set :database, "sqlite3:///books.db"
class Book < ActiveRecord::Base
# API description
# url             HTTP Method  Operation
# /api/books      GET          Get an array of all books
# /api/books/:id  GET          Get the book with id of :id
# /api/books      POST         Add a new book and return the book with an id attribute added
# /api/books/:id  PUT          Update the book with id of :id
# /api/books/:id  DELETE       Delete the book with id of :id
end

# Application logic
get '/books' do
	Book.order("created_at DESC").to_json
end

get '/books/:id' do |id|
end

post '/books' do
end

put '/books/:id' do |id|
end

delete '/books/:id' do |id|
end
