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

  // Non ReduxForm version.
  // onSubmit(event) {
  //   event.preventDefault();
  // }

  // ReduxForm version. Handles some common tasks.
  onSubmit(formValues) {
    console.log("StreamCreate.onSubmit(formValues) ", formValues)
  }

  render() {
    console.log("StreamCreate this.props: ", this.props);
    return (
      <form clasName= "ui from" onsubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// NB: Causes prop is Object not Function warning.
export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
