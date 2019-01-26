'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])
    const userPreferences = {
      frontend: false,
      backend: false,
      mobile: false,
      devops: false,
      marketing: false,
      management: false
    }

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.preferences().create(userPreferences, trx)

    trx.commit()

    return user
  }

  async update ({ request, auth }) {
    const user = await User.findOrFail(auth.user.id)
    const dataUser = request.only(['name', 'password'])

    const userPreferences = await user
      .preferences()
      .where('user_id', user.id)
      .first()
    const dataUserPreferences = request.only(['frontend', 'backend', 'mobile', 'devops', 'management', 'marketing'])

    user.merge(dataUser)
    userPreferences.merge(dataUserPreferences)

    await user.save()
    await userPreferences.save()

    return { user, userPreferences }
  }
}

module.exports = UserController
