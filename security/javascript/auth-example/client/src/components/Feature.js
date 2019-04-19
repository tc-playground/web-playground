import React, { Component } from 'react';

import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div>The Private Feature!</div>;
  }
}

export default requireAuth(Feature);
