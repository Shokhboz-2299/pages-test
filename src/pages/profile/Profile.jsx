import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function Profile() {
  const {userid} = useParams();
  const [posts, setPost] =useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(res => res.json())
    .then(data => console.log(data))
  })
return (
  <div>
    <h3>Posts</h3>
  </div>
)
}

export default Profile;