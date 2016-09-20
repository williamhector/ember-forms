import Em from 'ember';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default Em.TextField.extend(ControlMixin, {
  attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled', 'autocomplete'],
  placeholder: Em.computed.alias('parentView.placeholder'),
  required: Em.computed.alias('parentView.required'),
  autofocus: Em.computed.alias('parentView.autofocus'),
  disabled: Em.computed.alias('parentView.disabled'),
  autocomplete: Em.computed.alias('parentView.autocomplete'),
  type: Em.computed.alias('parentView.type'),
  model: Em.computed.alias('parentView.model'),
  propertyName: Em.computed.alias('parentView.propertyName')
});