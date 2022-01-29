import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/query";
import { Button } from "../Button";

class Query extends Component {
  handleClick = () => {
    this.props.getPosts();
  };

  render() {
    const { isLoading, posts } = this.props;

    return isLoading ? (
      <Button
        handleClick={this.handleClick}
        text="Click to get information"
      ></Button>
    ) : (
      <div>
        <h1>Posts</h1>
        {posts.map((item) => (
          <div key={item.id}>
            <div className="title">
              <h2>{item.id}</h2>
              <h2 className="el">{item.title}</h2>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  posts: state.posts,
});
const mapDispatchToProps = {
  getPosts,
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Query);
