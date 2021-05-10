export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <pre>{JSON.stringify(props.episodes, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await fetch('http://localhost:3333/episodes');
  const data = await resp.json();

  return {
    props: {
      episodes: data,
    },
    revalidade: 60 * 60 * 8,
  };
}
