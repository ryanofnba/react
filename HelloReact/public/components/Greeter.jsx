import React from 'react';

import GreeterForm from 'GreeterForm';
import GreeterMessage from 'GreeterMessage';

const Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default Message'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleUpdate: function(updates) {
    this.setState(updates);
  },

  render: function() {

    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message}/>
        <GreeterForm update={this.handleUpdate}/>
      </div>
    );
  }
});

module.exports = Greeter;
