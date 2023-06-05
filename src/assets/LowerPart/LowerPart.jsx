import './LowerPart.css'
function LowerPart(){
    return (
      <div>
        <div
          className="flex flex-col items-center justify-center ml-12 mr-12 md:ml-36 md:mr-36 lower"
          data-aos="flip-up"
        >
          <p className=" main-head text-[20px] md:text-[40px] ">
            With #TweetsFromHome, express your love for your favourite creator
          </p>
          <p className=" small-hea">
            Choose the top tweets that you absolutely admire to create your
            version of their #TweetsFromHome wall and simply share on Twitter.
          </p>
          <input
            className="justify-center in "
            type="text"
            placeholder="Search your favourite creator"
          />
          <button className="justify-center p-2 pl-12 pr-12 mt-10 Home-btn rounded-3xl ">
            Sign in to continue
          </button>
        </div>
        <div className="bg-[#00c3e6] flex items-center justify-center  h-10 mt-10 w-[100vw]">
          <p className="footer">Created by:- Vishal Gupta</p>
        </div>
      </div>
    );
}
export default LowerPart;