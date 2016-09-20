import Em from 'ember';
import InFormMixin from 'ember-idx-forms/mixins/in_form';

/*
Form Control Help

Renders a textual help of the control.

Note: currently must be a direct descendant of a form-group or 'property' must be explicitly defined

Syntax:
{{em-form-control-help}}
 */
export default Em.Component.extend(InFormMixin, {
  tagName: 'div',
  classNames: ['help-block'],
  classNameBindings: ['extraClass', 'horiClassCalc', 'hidden'],
  text: void 0,
  extraClass: void 0,
  horiClass: 'col-sm-offset-2 col-sm-10',
  horiClassCalc: Em.computed('form.isHorizontal', function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }),
  hidden: Ember.computed.not('helpText'),
  init: function() {
    this._super();
    this.addObserver('model.errors.' + this.get('parentView.propertyName') + '.@each.message', this, 'errorsChanged');
    this.errorsChanged();
  },
  errorsChanged: function(){
    this.set('errors', this.get('model.errors') ? this.get('model.errors').errorsFor(this.get('parentView.propertyName')) : null);
  },
  helpText: Em.computed('text', 'errors', 'errors.[]', 'errors.@each.message', function() {
    if(this.get('errors.length')){
      var text = '';
      this.get('errors').forEach(function(error){
        text += (text.length ? '<br/>' : '') + (error.message ? error.message : error);
      });
      return text;
    }else{
      return this.get('text');
    }
  }),
  hasHelp: Em.computed('helpText', function() {
    var _ref;
    return ((_ref = this.get('helpText')) != null ? _ref.length : void 0) > 0;
  }),
  hasError: Em.computed('errors.length', function() {
    var _ref;
    return (_ref = this.get('errors')) != null ? _ref.length : void 0;
  })
});
