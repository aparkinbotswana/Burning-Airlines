json.extract! user, :id, :name, :email, :password_digest, :is_admin, :false, :created_at, :updated_at
json.url user_url(user, format: :json)
