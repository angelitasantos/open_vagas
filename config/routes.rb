Rails.application.routes.draw do
  resources :companies, only: [:new, :edit, :create, :update]
  resources :positions
  resources :applicants, only: [:index, :new, :create]
  devise_for :users
  root to: 'home#index'
  get 'painel', to: 'painel#index'
  get 'simulador', to: 'painel#simulador'
  get 'financeiro', to: 'painel#financeiro'
  get 'vendas', to: 'painel#vendas'
  get 'cadastros', to: 'painel#cadastros'
  get 'operacional', to: 'painel#operacional'
  get 'relatorios', to: 'painel#relatorios'
  get 'painelconfig', to: 'painel#painel'
  get 'siteconfig', to: 'painel#site'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
