import Em from 'ember';

/*
A mixin that enriches a view that is attached to a model property.

The property name by default is taken from the parentView unless explictly
    defined in the `property` variable.

This mixin also binds a property named `errors` to the model's `model.errors.@propertyName` array
 */

export default Em.Mixin.create({
  property: void 0,
  propertyName: Em.computed('parentView.property', function() {
    if (this.get('property')) {
      return this.get('property');
    } else if (this.get('parentView.property')) {
      return this.get('parentView.property');
    } else {
      return Em.assert(false, 'Property could not be found.');
    }
  }),
  init: function() {
    this._super();
    this.addObserver('model.errors.' + this.get('propertyName') + '.@each.message', this, 'errorsChanged');
    this.errorsChanged();
  },
  errorsChanged: function(){
    this.set('errors', this.get('model.errors.' + this.get('propertyName')));
  }
});