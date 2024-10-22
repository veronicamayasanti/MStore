import ModelHero from '../images/model-hero.png'
import HeroBg from "../images/bg_hero.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})`, height: '600px' }}
    >
      <div className="container mx-auto flex justify-around h-full py-16">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-blue-700 mr-3"></div>
            <div>new trend</div>
          </div>

          {/* title */}
          <h2 className="text-[70px] leading-[1.1] font-light mb-4">
            flash sale 11.11
            <br />
            <span className="font-semibold">up to 50% off</span>
          </h2>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-blue-500"
            to="/"
          >
            Discover More
          </Link>
        </div>

        {/* image */}
        <div className="hidden lg:block">
          <img src={ModelHero} alt="" className='h-[600px]' />
        </div>
      </div>
    </section>
  );
}

export default Hero
