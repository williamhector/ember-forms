import Em from 'ember';
import InFormMixin from 'ember-idx-forms/mixins/in_form';
import HasPropertyMixin from 'ember-idx-forms/mixins/has_property';
import HasPropertyValidationMixin from 'ember-idx-forms/mixins/has_property_validation';

/*
Form Group

Wraps labels, controls and help message for optimum spacing and validation styles.
A wrapper for a single input with its assistances views such as label, help message.

A form group can yield the control's view after or within a label, this is dependent on the control
    required layout and is defined byt he yieldInLabel property


Syntax:
{{em-form-group
    //The state of the form group
    status="none|error|warning|success"
    //If true the control view is yieled within the label
    yieldInLabel=true|false
    //If true validation icons will be rendered, by default inherited from the form
    v_icons: true
    //Label of the form group, default is a human friendly form of the property name
    label="Some label"
}}
 */
export default Em.Component.extend(InFormMixin, HasPropertyMixin, HasPropertyValidationMixin, {
  tagName: 'div',
  "class": 'form-group',
  layoutName: 'components/em-form-group',
  classNameBindings: ['class', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback'],
  attributeBindings: ['disabled'],
  canShowErrors: true,
  //canShowErrorsObserver: Em.observer('form', 'form.model', function() {
  //  this.set('canShowErrors', false);
  //}),
  showSuccess: Em.computed.alias('form.showSuccess'),
  hasSuccess: Em.computed('status', 'canShowErrors', 'showSuccess', function() {
    var success;
    success = this.get('validations') && this.get('status') === 'success' && this.get('canShowErrors') && this.get('showSuccess');
    this.set('success', success);
    return success;
  }),
  hasWarning: Em.computed('status', 'canShowErrors', function() {
    var warning;
    warning = this.get('validations') && this.get('status') === 'warning' && this.get('canShowErrors');
    this.set('warning', warning);
    return warning;
  }),
  hasError: Em.computed('status', 'canShowErrors', function() {
    var error;
    error = this.get('validations') && this.get('status') === 'error' && this.get('canShowErrors');
    this.set('error', error);
    return error;
  }),
  v_icons: Em.computed.alias('form.v_icons'),
  v_success_icon: 'glyphicon glyphicon-ok',
  v_warn_icon: 'glyphicon glyphicon-alert',
  v_error_icon: 'glyphicon glyphicon-remove',
  validations: true,
  yieldInLabel: false,
  v_icon: Em.computed('status', 'canShowErrors', 'showSuccess', function() {
    if (!this.get('canShowErrors')) {
      return;
    }
    switch (this.get('status')) {
      case 'success':
        return this.get('showSuccess') ? this.get('v_success_icon') : null;
      case 'warning':
      case 'warn':
        return this.get('v_warn_icon');
      case 'error':
        return this.get('v_error_icon');
      default:
        return null;
    }
  }),
  init: function() {
    return this._super();
  },

  /*
  Observes the helpHasErrors of the help control and modify the 'status' property accordingly.
   */

  /*
  Listen to the focus out of the form group and display the errors
   */
  focusOut: function() {
    return this.set('canShowErrors', !!this.get('validations'));
  }
});