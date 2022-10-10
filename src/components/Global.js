import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  search() {
    console.log("Search", this.state.query);
  }
  render() {
    return (
      <div className="p-3">
        <h2 className="text-center fw-bold">Book Explorer</h2>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Search for a book"
            onChange={(event) => this.setState({ query: event.target.value })}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.search();
              }
            }}
          />
          <Button variant="outline-primary" onClick={() => this.search()}>
            Search
          </Button>
        </Stack>
      </div>
    );
  }
}
export default Global;
