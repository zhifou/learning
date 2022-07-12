import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const gotoBlog = () => {
    navigate('/about');
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>在React中使用React Router v6 的指南</p>
      <div onClick={gotoBlog}>go blog</div>
    </div>
  );
}

export default Home;
