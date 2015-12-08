import Em from 'ember';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default Em.Checkbox.extend(ControlMixin, {
  "class": false,
  model: Em.computed.alias('parentView.parentView.model'),
  propertyName: Em.computed.alias('parentView.parentView.propertyName'),
  init: function() {
    this._super();
    return Em.Binding.from("model." + (this.get('propertyName'))).to('checked').connect(this);
  }
});