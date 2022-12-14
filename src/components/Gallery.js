import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let alternate = "https://cdn-icons-png.flaticon.com/512/1347/1347682.png";
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book" href={infoLink} target="_blank">
              <img
                src={
                  imageLinks !== undefined ? imageLinks.thumbnail : alternate
                }
                alt="book photos"
                className="book-img"
              />
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}
export default Gallery;
