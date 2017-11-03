Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  get '/home', to: "home#index", as: "homepage"

  # authentication related
  get '/sign-in', to: "authentication#sign_in", as: "sign_in"
  post 'authenticate', to: 'authentication#authenticate'



  # API
  scope module: 'api' do
    namespace :v1, defaults: { format: :json } do

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

  get '*unmatched_route', to: 'home#index'

end
