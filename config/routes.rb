Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :videos, only: [:index, :show, :create, :edit, :update, :destroy] do
      resources :comments, only: [:index, :show, :create]
    end
    resources :comments, only: [:update, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
  
end
