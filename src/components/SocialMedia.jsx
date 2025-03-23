import React, { useState } from 'react';
import '../styles.css';

const SocialMedia = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() || image) {
      setPosts([{ text: postText, image: URL.createObjectURL(image) }, ...posts]);
      setPostText('');
      setImage(null);
    }
  };

  return (
    <div className="social-container">
      <h2>Share Your Progress 🎉</h2>
      <textarea
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>

      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

      <button onClick={handlePost}>Post</button>

      <div className="posts-section">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <p>{post.text}</p>
            {post.image && <img src={post.image} alt="user post" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
