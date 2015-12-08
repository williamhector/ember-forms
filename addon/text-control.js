import Em from 'ember';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default Em.TextArea.extend(ControlMixin, {
  attributeBindings: ['placeholder'],
  placeholder: Em.computed.alias('parentView.placeholder'),
  model: Em.computed.alias('parentView.model'),
  propertyName: Em.computed.alias('parentView.propertyName'),
  rows: Em.computed.alias('parentView.rows')
});
