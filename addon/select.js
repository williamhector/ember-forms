import Em from 'ember';
import FormGroupComponent from './group';

/*
Form Select

Syntax:
{{em-select property="property name"
    content=array_of_options
    optionValuePath=keyForValue
    optionLabelPath=keyForLabel
    prompt="Optional default prompt"}}
    
    //Optional params
    @param propertyIsModel - (boolean) forces the selected object to be assigned to the property instead of the optionValuePath 
 */
export default FormGroupComponent.extend({
  v_icons: false,
  controlView: 'ember-form-controls/select',
  propertyIsModel:true,
  property: void 0,
  content: void 0,
  optionValuePath: void 0,
  optionLabelPath: void 0,
  prompt: void 0,
  controlWrapper: Em.computed('form.form_layout', function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  })
});
