'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.create({
      name: 'Administrador',
      email: 'admin@meetapp.com',
      password: 'admin@123456'
    })
  }
}

module.exports = UserSeeder
