interface HomeProps {
  titulo: string;
  texto: string;
}

function Home({ titulo, texto }: HomeProps) {
  return (
    <>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </>
  );
}

export default Home
