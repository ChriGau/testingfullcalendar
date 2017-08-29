json.array! shifts do |shift|
  json.extract! shift, :id, :start, :end, :title, :description, :created_at, :updated_at
  json.url shift_url(shift, format: :json)
end
