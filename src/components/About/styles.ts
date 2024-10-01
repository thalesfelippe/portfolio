import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px;
  background-color: #0a192f;
  height: 500px;
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  color: #ccd6f6;
  
  h2 {
    font-size: 36px;
    color: #64ffda;
  }

  p {
    font-size: 18px;
  }
`;

export const ModelContainer = styled.div`
  flex: 1;
  max-width: 800px;
  height: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const SketchfabEmbedWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
