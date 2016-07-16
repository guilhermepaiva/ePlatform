Rails.application.routes.draw do
  devise_for :users, :controllers => { :sessions => "sessions", :registrations => "registrations" }

  resources :schools

  resources :courses do
    resources :chapters
  end

  #progresses
  get "chapters/read" => "progresses#show"
  post "chapters/mark_as_complete" => "progresses#create"
  delete "chapters/mark_as_incomplete" => "progresses#delete"

  #users
  get "/my_current_user" => "users#my_current_user"
  match 'users/:id' => 'users#update_user', via: [:patch]
  get '/send_password' => "users#reset_password"    
  get "/subscribers" => "users#subscribers"

  #subscriptions
  post "/subscriptions" => "subscriptions#create"
  put "/subscriptions" => "subscriptions#update"
  delete "/subscriptions" => "subscriptions#delete"

end
