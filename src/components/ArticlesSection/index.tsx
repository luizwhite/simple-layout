import { Container, Title, Card } from './styles';

export const ArticlesSection: React.FC = () => {
  return (
    <section>
      <Title>Título 4</Title>
      <Container>
        {[...Array(8)].map(() => (
          <Card>
            <img src="/image.png" alt="image_example" />
            <div>
              <p>Texto......</p>
              <h2>Título......</h2>
              <button type="button">Acessar</button>
            </div>
          </Card>
        ))}
        <strong>+ Carregar mais cursos</strong>
      </Container>
    </section>
  );
};
