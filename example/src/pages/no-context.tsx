import { generateApiClient, useQuery } from "fetch-query";

export default function NoContext() {
  return <PageContent />;
}

function PageContent() {
  const apiClient = generateApiClient({
    baseUrl: "https://jsonplaceholder.typicode.com",
  });

  const { data, isLoading } = useQuery({
    url: "/posts",
    executeImmediately: true,
    apiClient: apiClient,
  });

  return (
    <div>
      <h1>Get</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((post: any) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
