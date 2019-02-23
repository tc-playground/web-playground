import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // formProps is wired in on ReduxForm.Field.
  // renderInput(formProps) {
  //   console.log("StreamCreate.renderInput(formProps) formProps:", formProps);
  //   return (
  //     <input onChange={formProps.input.onChange} value={formProps.value}/>
  //   );
  // }
  // Short syntax - De-structure input, and, splat all it's properties.
  renderInput({ input, label }) {
    return (
      <div className="ui form">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    console.log("StreamCreate this.props: ", this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

// NB: Causes prop is Object not Function warning.
export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
