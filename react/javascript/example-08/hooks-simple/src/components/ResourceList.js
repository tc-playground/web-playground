import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  // class ResourceList extends React.Component {
  //   state = { resources: [] };
  //
  //   async componentDidMount() {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //     );
  //     this.setState({ resources: response.data });
  //   }
  //
  //   async componentDidUpdate(previousProps) {
  //     // We need to check that the props have changed as EVERYTIME setState() is called
  //     // 'componentDidUpdate' will be executed.
  //     //
  //     if (previousProps.resource !== this.props.resource) {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //       );
  //       this.setState({ resources: response.data });
  //     }
  //   }
  //
  //   render() {
  //     return (
  //       <div className="ui container">ResourceList: {this.props.resource}</div>
  //     );
  //   }

  const [resources, setResource] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResource(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
        {resources.map((r) => 
            <li key={r.id}>{r.title}</li>)}
    </ul>);
};

export default ResourceList;
