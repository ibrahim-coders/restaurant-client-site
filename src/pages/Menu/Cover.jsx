import { Parallax } from 'react-parallax';

const Cover = ({ menuCover, menuTitle = 'OUR MENU' }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={menuCover}
      bgImageAlt="Our delicious menu background"
      strength={-200}
    >
      <div className="hero h-[500px] md:h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md px-4 md:px-0">
            <h1 className="mb-5 text-5xl font-bold">{menuTitle}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
