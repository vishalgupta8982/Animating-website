import './Middlepart.css'
import leftImg from '../../assets/middle-section-image.png'
function Middlepart(){
     const data = [
       {
         id: 1,
         name: "#HiArmy",
         bg: "#ffdce5",
       },
       {
         id: 2,
         name: "#everydays",
         bg: "#d1f7c4",
       },
       {
         id: 3,
         name: "#teamtrees",
         bg: "#fee2d5",
       },
       {
         id: 4,
         name: "#BTS",
         bg: "#72DDC3",
       },
       {
         id: 5,
         name: "#botarmy",
         bg: "#9cc7ff",
       },
     ];
    return (
      <div className="Middle">
        <h1 className="text-[24px] md:text-[36px]">
          Creators <span>are powerfuls</span>
        </h1>
        <div className="flex flex-col justify-between mt-10 md:flex-row main">
          <div className="flex justify-center md:justify-start left"
          data-aos="zoom-in">
            <img className="img" src={leftImg} alt="" />
          </div>
          <div className="justify-center flex space-y-2 md:flex-row flex-wrap right w-[100vw] md:w-[30vw]  p-10 md:justify-end"
          data-aos="zoom-in-up">
            
            <p className="small-head">Creator shape culture</p>
            <p className="content">
              2 in 3 twitter users agree that creators change and shape culture
            </p>
            {data.map((data) => (
              <p className="flex flex-row data" style={{ background: data.bg }}>
                {data.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
}
export default Middlepart