# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Airplane.destroy_all

a1 = Airplane.create name: 737, row: 20, column: 4
a2 = Airplane.create name: 757, row: 20, column: 4
a3 = Airplane.create name: 747, row: 25, column: 4


Flight.destroy_all

f1 = Flight.create name: 27, date: "2017-12-20", to: 'MEL', from: 'SYD', seats: 80
f2 = Flight.create name: 69, date: "2017-11-20", to: 'BRI', from: 'SYD', seats: 80, airplane_id: 2
f3 = Flight.create name: 9, date: "2017-10-20", to: 'PER', from: 'SYD', seats: 100, airplane_id: 3
f4 = Flight.create name: 29, date: "2017-10-23", to: 'PER', from: 'SYD', seats: 100, airplane_id: 3

a1.flights << f1 << f3
a2.flights << f2
a3.flights << f4

User.destroy_all

u1 = User.create name: 'James Theo', email: 'chicken@chicken.com', password: 'chicken', is_admin: false
u2 = User.create name: 'Theo James', email: 'admin@admin.com', password: 'chicken', is_admin: true


Reservation.destroy_all
r1 = Reservation.create seatid: 'A1'
# r2 = Reservation.create user_id: 4, flight_id: 1, row: 01, column: 'A'
# r3 = Reservation.create user_id: 3, flight_id: 2, row: 01, column: 'A'
# r4 = Reservation.create user_id: 4, flight_id: 2, row: 01, column: 'A'
# r1 = Reservation.create user_id: 3, flight_id: 3, row: 01, column: 'A'
# r2 = Reservation.create user_id: 4, flight_id: 3, row: 01, column: 'A'
# r3 = Reservation.create user_id: 3, flight_id: 4, row: 01, column: 'A'
# r4 = Reservation.create user_id: 4, flight_id: 4, row: 01, column: 'A'
#

u1.reservations << r1


f1.reservations << r1
