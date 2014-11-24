Rails.application.routes.draw do

  delete 'items/claim', to: 'items#unclaim'
  
  resources :wishlists
  resources :items


  get 'sessions/signup'
  get 'sessions/login'
  get 'sessions/home'
  get 'sessions/logout'
  get 'sessions/user', to: 'sessions#find_user'


  get 'user/:id', to: 'items#user', as: 'claimed_items'
  get 'user/:id/json', to: 'items#userjson'

  post 'items/claim', to: 'items#claim'

  root 'sessions#signup'
    get 'login', to: "sessions#login", as: 'login'
    get 'signup', to: "sessions#signup", as: 'signup'

    # post 'login', to: "sessions#attempt_login"
    # post 'signup', to: "sessions#create"

    get 'logout', to: "sessions#logout"

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  # get 'wishlist', to: 'wishlists#new', as: 'wishlists'

  # post 'wishlist', to: 'wishlists#show'

  # get 'wishlist/:id', to: 'wishlists#show'

  # post 'wishlist', to: 'wishlists#create'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
