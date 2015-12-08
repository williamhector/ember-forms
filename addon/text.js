import Em from 'ember';
import FormGroupComponent from './group';

/*
Form Input

Syntax:
{{em-text property="property name" rows=4}}
 */
export default FormGroupComponent.extend({
  controlView: 'ember-form-controls/text',
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: Em.computed('form.form_layout', function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  })
});
