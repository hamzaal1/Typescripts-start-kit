import useSWR from 'swr';
import { useEffect } from 'react';

type TypePost = {
  id: number;
  title: string;
  body: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("There's something wrong");
  }
  let data: TypePost[] = await res.json();
  return data;
};

function ErrorNotFound() {
  const { error } = useSWR<TypePost[]>("https://jsonplaceholder.typicode.com/posts", fetcher);

  return (
    <>
      {error && <p>{error.message}</p>}
    </>
  );
}

function App() {
  const { data } = useSWR<TypePost[]>("https://jsonplaceholder.typicode.com/posts", fetcher);


  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {
          data ? data.map(post =>
            <div key={post.id}>
              <p><b>{post.title}</b></p>
              <p>{post.body}</p>
            </div>
          ) : <p>Loading</p>
        }
      </div>
      <ErrorNotFound />
    </div>
  );
}

export default App;
