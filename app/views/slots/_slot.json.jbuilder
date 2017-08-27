json.array!(@slots) do |slot|
  json.extract! slot, :id,
  json.start slot.start_date
  json.end slot.end_date
  json.title slot.description
  json.url slot_url(slot, format: :html)
end
