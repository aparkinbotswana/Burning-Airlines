json.extract! flight, :id, :name, :date, :to, :from, :seats, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
