import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 50px;
  h3 {
    color: #D9D9D9;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
  }
`;

const TagStyle = styled.button`
  color: #FFFFFF;
  background-color: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px;
  height: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: #C98CF1;
  }

`;

const Tags = () => {
  return ( 
    <TagContainer>
      <h3>Busque por tags: </h3>
      {tags.map(tag => <TagStyle key={tag.id}>{tag.titulo}</TagStyle>)}
    </TagContainer>
  );
}
 
export default Tags;