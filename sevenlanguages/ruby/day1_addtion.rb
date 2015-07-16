n = rand(10)

while m = gets.to_i
  if n > m
    puts 'Bigger'
  elsif n < m
    puts 'Smaller'
  else
    puts 'Congratulations!'
    break
  end
end
