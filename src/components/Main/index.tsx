import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/icon-192.png" alt="Imagem de um átomo." />
      <S.Title>NextJS na Prática</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  );
};

export default Main;
