import "./LandingPage.css";
import LandingPageImg from "../assets/landing-page-image.png";
function LandingPage() {
  return (
    <div className="flex flex-col-reverse mt-20 md:flex-row md:mt-0 LandingPage">
      <div
        className="flex flex-col justify-center flex-shrink left "
        data-aos="fade-right"
      >
        <p className="main-txt">
          Become a true <span className="super">SUPERFAN</span>
        </p>
        <p className="small-txt">
          Support your favourite creator by sharing their #TweetsFromHome wall
          with your loved ones and grow their community
        </p>
        <input
          className="justify-center in "
          type="text"
          placeholder="Search your favourite creator"
        />
        <button className="p-2 pl-16 pr-16 Home-btn rounded-3xl">
          View tweets from Home
        </button>
      </div>
      <div
        data-aos="fade-left"
        className="flex items-center justify-center right "
      >
        <img src={LandingPageImg} alt="" />
      </div>
    </div>
  );
}
export default LandingPage;
