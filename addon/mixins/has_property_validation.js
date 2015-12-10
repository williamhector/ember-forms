import Em from 'ember';

/*
A mixin that enriches a view that is attached to a model property that has validation
    support.

This mixin binds a property named `errors` to the model's `model.errors.@propertyName` array
 */

export default Em.Mixin.create({
  init: function() {
    this._super();
    Em.assert(!Em.isNone(this.get('propertyName')), 'propertyName is required.');
    this.addObserver('model.errors.' + this.get('propertyName') + '.@each.message', this, 'errorsChanged');
    this.errorsChanged();
  },
  errorsChanged: function(){
    this.set('errors', this.get('model.errors.' + this.get('propertyName')));
  },
  status: Em.computed('errors', 'errors.length', function() {
    if (this.get('errors.length')) {
      return 'error';
    } else {
      return 'success';
    }
  })
});