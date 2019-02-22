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
  renderInput({ input }) {
    return (
      <input {...input} />
    );
  }

  render() {
    console.log("StreamCreate this.props: ", this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

// NB: Causes prop is Object not Function warning.
export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
