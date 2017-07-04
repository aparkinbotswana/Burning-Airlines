Rails.application.routes.draw do
  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

  # new julian code
  get '/login' => 'session#new'         #login form
  post '/login' => 'session#create'   # check credentials and attempt login
  delete '/login' => 'session#destroy'  # log out destroy session
  # end new julian code



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
