import Em from 'ember';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default Em.Select.extend(ControlMixin, {
  model: Em.computed.alias('parentView.model'),
  propertyName: Em.computed.alias('parentView.propertyName'),
  content: Em.computed.alias('parentView.content'),
  optionValuePath: Em.computed.alias('parentView.optionValuePath'),
  optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
  prompt: Em.computed.alias('parentView.prompt'),
  multiple: Em.computed.alias('parentView.multiple')
});