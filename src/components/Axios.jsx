import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comment, setComment] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  const fetchUserPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    console.log(response);
  };

  const fetchUserComments = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComments(response.data);
    console.log(response);
  };

  const fetchUserAlbums = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setAlbums(response.data);
    console.log(response);
  };

  const fetchUserTodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(response.data);
    console.log(response);
  };

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
    console.log(response);
  };

  const fetchUserPhotos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setPhotos(response.data);
    console.log("my response:", response);
  };

  const createUserPost = async (e) => {
    e.preventDefault();
    const userId = 1;
    // const data = {title, body, userId}
    // console.log(data)

    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId,
    });
    console.log(res);
  };

  const userComment = async () => {
    console.log(comment);
  };

  return (
    <>
      <div>
        <button onClick={fetchUserPosts}>Get Posts</button>
        <button onClick={fetchUserComments}>Get Comments</button>
        <button onClick={fetchUserAlbums}>Get Albums</button>
        <button onClick={fetchUserTodos}>Get Todos</button>
        <button onClick={fetchUsers}>Get Users</button>
        <button onClick={fetchUserPhotos}>Get Photos</button>

        {posts.slice(0, 5).map((post, idx) => (
          <div key={idx}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

        {comments.slice(0, 5).map((comment, idx) => (
          <div key={idx}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}

        {albums.slice(0, 5).map((album, idx) => (
          <div key={idx}>
            <h3>User ID: {album.userId}</h3>
            <p>ID: {album.id}</p>
            <p>Title: {album.title}</p>
          </div>
        ))}

        {todos.slice(0, 5).map((todo, idx) => (
          <div key={idx}>
            <h3>User ID: {todo.userId}</h3>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        ))}

        {users.slice(0, 5).map((user, idx) => (
          <div key={idx}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}

        {photos.slice(0, 5).map((photo, idx) => (
          <div key={idx}>
            <h3>Album ID: {photo.albumId}</h3>
            <p>ID: {photo.id}</p>
            <p>Title: {photo.title}</p>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}

        <form onSubmit={createUserPost}>
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label>Post</label>
            <input
              type="text"
              placeholder="post"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>

      <h2>{postTitle}</h2>
      <p>{postBody}</p>
    </>
  );
};

export default Axios;
