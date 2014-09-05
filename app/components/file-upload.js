import Ember from 'ember';

export default Ember.FileField.extend({
  url: '',
  filesDidChange: (function () {
    var uploadUrl = this.get('url')
    var files = this.get('files')

    var uploader = Ember.Uploader.create({
      url: uploadUrl,
      paramNamespace: 'issue'
    })

    var extraParams = this.get('issue')

    if (!Ember.isEmpty(files)) {
      var promise = uploader.upload(files[0], extraParams.serialize())
      promise.then(function (issue) {
        this.sendAction()
      }.bind(this))

    }
  }).observes('files')
});
