```javascript
// pages/index.js
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = (id) => {
    const newSearchParams = { id };
    router.push({ pathname: `/post/[id]`, params: {id: id.toString()} }, undefined, { shallow: true }); // Using shallow: true

  };

  return (
    <div>
      <h1>Blog Post Listing</h1>
      <button onClick={() => handleNavigate(1)}>View Post 1</button>
      <button onClick={() => handleNavigate(2)}>View Post 2</button>
    </div>
  );
}


// pages/post/[id].js

export default function PostPage({params}){
    return (
        <div><h1>Post {params.id}</h1></div>
    );
}
```