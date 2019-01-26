'use strict'

class UserPreferences {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      password: 'required|confirmed',
      frontend: 'required|boolean',
      backend: 'required|boolean',
      mobile: 'required|boolean',
      devops: 'required|boolean',
      management: 'required|boolean',
      marketing: 'required|boolean'
    }
  }
}

module.exports = UserPreferences
