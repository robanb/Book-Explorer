import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Gallery from "./Gallery";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: [],
    };
  }

  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        let { items } = json;
        this.setState({ items });
      });
  }
  render() {
    return (
      <div className=" Global">
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
        <Gallery items={this.state.items} />
      </div>
    );
  }
}
export default Global;
