Rails.application.routes.draw do
  root "portals#index"
  resources :sessions
  resources :portals

  delete '/destroy', to: 'sessions#destroy', as: :destroy_session
  put 'update/:id', to: 'portals#update'

  post 'create', to: 'portals#create'

  delete '/student', to: 'portals#destroy', as: :destroy_student

end
