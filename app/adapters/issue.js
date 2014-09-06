import Ember from 'ember'
import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  createRecord: function (store, type, record) {
    var serializedIssue = record.serialize()
      , formData = new FormData()
      , $ = Ember.$
      , that = this

    Ember.keys(serializedIssue).forEach(function (key) {
      formData.append('issue[%@]'.fmt(key), serializedIssue[key])
    })

    formData.append('issue[file]', record.get('file'))

    return new Ember.RSVP.Promise(function (resolve, reject) {
      $.ajax({
        contentType: false,
        data: formData,
        processData: false,
        type: 'POST',
        url: 'http://localhost:3000/issues'
      }).done(function (json) {
        resolve(json)
      }).fail(function(jqXHR, textStatus, error) {
        reject(error)
      })
    })
  }
});
