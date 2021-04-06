import { useRef } from 'react';

import useDragScroll from '../../hooks/useDragScroll';

import { ReactComponent as Image01 } from '../../assets/example_image_1.svg';
import { ReactComponent as Image02 } from '../../assets/example_image_2.svg';

import { Container, Card, Content } from './styles';

export const Featured: React.FC = () => {
  const scrollWrapperRef = useRef<HTMLElement>(null);
  const { isDragging } = useDragScroll(scrollWrapperRef);

  return (
    <Container ref={scrollWrapperRef} {...(isDragging && { $grabbing: true })}>
      <Card>
        <Image01 viewBox="0 0 105 105" />
        <Content>
          <h1>Título 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            minima, earum porro quas sunt eaque provident repudiandae ab
            asperiores veniam modi id ea numquam ullam dolore architecto
            officiis magnam nostrum.
          </p>
          <div>
            <button type="button">Botão para detalhes...</button>
          </div>
        </Content>
      </Card>
      <Card>
        <Image02 viewBox="0 0 105 105" />
        <Content>
          <h1>Título 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            minima, earum porro quas sunt eaque provident repudiandae ab
            asperiores veniam modi id ea numquam ullam dolore architecto
            officiis magnam nostrum.
          </p>
          <div>
            <button type="button">Botão para detalhes...</button>
          </div>
        </Content>
      </Card>
    </Container>
  );
};
