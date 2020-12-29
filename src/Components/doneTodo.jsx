import React from 'react'

class doneTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        { this.props.todo.title}
      </div>
    );
  }
}

doneTodo.propTypes = {

};

export default doneTodo;