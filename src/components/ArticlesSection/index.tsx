import { useRef } from 'react';

import useDragScroll from '../../hooks/useDragScroll';
import { Container, Title, Card } from './styles';

export const ArticlesSection: React.FC = () => {
  const scrollWrapperRef = useRef<HTMLElement>(null);
  const { isDragging } = useDragScroll(scrollWrapperRef);

  return (
    <section>
      <Title>Título 4</Title>
      <Container
        ref={scrollWrapperRef}
        {...(isDragging && { $grabbing: true })}
      >
        {[...Array(8)].map(() => (
          <Card>
            <img draggable={false} src="/image.png" alt="image_example" />
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
