Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  # homepage template
  get '/home', to: "home#index", as: "homepage"

  # account/profile
  get '/account', to: "accounts#show", as: "account"

  # registration
  get '/sign-up', to: "home#sign_up", as: "new_user"

  # authentication
  get '/sign-in', to: "home#sign_in", as: "sign_in"



  # API
  scope module: 'api' do
    namespace :v1, defaults: { format: :json } do

      # new users/registration
      post '/users', to: "users#create", as: "create_user"
      post '/sessions', to: "sessions#create", as: "create_session"

      #homepage
      get '/home/carousels', to: "homepage#carousels", as: "homepage_carousels"

      # albums
      get '/albums/:id', to: "albums#show", as: "album"
      get '/new-releases', to: "albums#new_releases", as: "new_releases", defaults: {format: 'json'}
      get '/featured-releases', to: "albums#featured_releases", as: "featured_releases"
      get '/acclaimed-releases', to: "albums#acclaimed_releases", as: "acclaimed_releases"

    end
  end


  # Admin
  namespace :admin do
    resources :albums
  end

  # catch all ruote to handle unusual requests
  get '*unmatched_route', to: 'home#index'

end
