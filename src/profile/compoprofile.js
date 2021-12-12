import React from "react";
import Alert from "react-bootstrap/Alert";

export default function compoprofile() {
  return (
    <div className="profile">
      <h1> {this.props.bio} </h1>

      <h1> {this.props.fullName} </h1>
      <br />
      <h1> {this.props.profession} </h1>

      <Alert variant="success">
        <Alert.Heading>Rania </Alert.Heading>

        <hr />
        <p className="mb-0"></p>
      </Alert>
    </div>
  );
}
