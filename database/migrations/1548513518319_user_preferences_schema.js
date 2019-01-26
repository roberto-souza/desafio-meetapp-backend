'use strict'

const Schema = use('Schema')

class UserPreferencesSchema extends Schema {
  up () {
    this.create('user_preferences', table => {
      table.increments()
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.boolean('frontend').notNullable()
      table.boolean('backend').notNullable()
      table.boolean('mobile').notNullable()
      table.boolean('devops').notNullable()
      table.boolean('management').notNullable()
      table.boolean('marketing').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_preferences')
  }
}

module.exports = UserPreferencesSchema
