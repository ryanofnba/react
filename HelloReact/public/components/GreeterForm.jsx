import React from 'react';

const GreeterForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    const updates = {};
    const name = this.refs.name.value;
    const message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.update(updates);

  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="name" />
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
