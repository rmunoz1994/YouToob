Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :videos, only: [:index, :show, :create, :edit, :update, :destroy] do
      resources :comments, only: [:index, :show, :create]
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
      # resources :likes, only: [:create, :destroy]
    end
    resources :comments, only: [:update, :destroy] do
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
    end
    resource :session, only: [:new, :create, :destroy]
    resources :channels, except: [:new, :edit]
  end
  
end
