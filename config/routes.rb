Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  # homepage template
  get '/home', to: "home#index", as: "homepage", constraints: lambda { |req| req.format == :html }

  # account/profile
  get '/account', to: "accounts#show", as: "account", constraints: { format: :html }

  # registration
  get '/sign-up', to: "home#sign_up", as: "new_user", constraints: { format: :html }

  # authentication
  get '/sign-in', to: "home#sign_in", as: "sign_in", constraints: { format: :html }


  get '/albums/*unmatched_route', to: 'home#index', constraints: { format: :html }


  # API
  scope module: 'api' do
    namespace :v1, constraints: { format: :json } do

      # new users/registration
      post '/users', to: "users#create", as: "create_user"
      post '/sessions', to: "sessions#create", as: "create_session"

      #homepage
      get '/home/carousels', to: "homepage#carousels", as: "homepage_carousels"

      # albums
      get '/albums/:id', to: "albums#show", as: "album"
      get '/new-releases', to: "albums#new_releases", as: "new_releases"
      get '/featured-releases', to: "albums#featured_releases", as: "featured_releases"
      get '/acclaimed-releases', to: "albums#acclaimed_releases", as: "acclaimed_releases"

    end
  end


  # Admin
  namespace :admin do
    resources :albums
  end

  get '*unmatched_route', to: 'home#index', constraints: { format: :html }

end
