import * as S from './styles';

const About = () => {
  return (
    <S.AboutSection>
      <S.TextContainer>
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor front-end...</p>
      </S.TextContainer>

      <S.ModelContainer>
        <S.SketchfabEmbedWrapper>
          <iframe
            title="A Windy Day"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/fb78f4cc938144e6902dd5cff354d525/embed?autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </S.SketchfabEmbedWrapper>
      </S.ModelContainer>
    </S.AboutSection>
  );
};

export default About;
