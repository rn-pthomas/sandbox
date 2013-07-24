require 'sinatra'

get '/hi/:name' do
	"hello #{params[:name]}!"
end
