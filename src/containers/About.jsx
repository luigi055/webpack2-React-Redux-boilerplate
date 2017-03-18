import React from 'react';
import { connect } from 'react-redux';

const About = props => {
  const { greet } = props;
  return (
    <div className="about">
      <h1>React Redux Webpack 2 Boilerplate</h1>
      <p>{greet} This is a Full React app workflow used in Level Up Techs </p>
    </div>
  );
};

const mapStateToProps = state => ({ greet: state.greet });

export default connect(mapStateToProps)(About);
