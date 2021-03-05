import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Duis laboris Lorem velit labore est mollit fugiat exercitation pariatur
        do tempor cupidatat. Sunt aute esse nostrud est fugiat pariatur. Dolore
        do dolore occaecat amet magna commodo dolor occaecat id amet incididunt.
        Ipsum excepteur anim anim duis do dolor nulla proident ipsum est veniam.
        Et laboris ipsum magna occaecat est cupidatat amet.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
