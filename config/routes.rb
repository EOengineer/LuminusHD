Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  get '/home', to: "home#index", as: "homepage"
  get '/home/carousels', to: "home#carousels", as: "homepage_carousels"


  # albums
  get '/albums/:id', to: "albums#show", as: "album"

  namespace :admin do
    resources :albums
  end

  get '*unmatched_route', to: 'home#index'

end
