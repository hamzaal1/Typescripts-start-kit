import useSWR from 'swr';
import Post from "./Post";
import { TypePost } from './types/Typepost';

function App() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("There's something wrong");
    }
    return await res.json();
  };

  const { data, error } = useSWR<TypePost[]>("https://jsonplaceholder.typicode.com/posts", fetcher);

 
  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {data ? (
          data.map((post) => (
            <Post key={post.id} id={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
