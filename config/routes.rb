Rails.application.routes.draw do
  resources :shifts
  resources :restaurants
  root to: 'shifts#index'
end
