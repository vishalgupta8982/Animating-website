import './Header.css'
import logo from '../../assets/logo.svg'
import Menu from '@material-ui/icons/Menu'
 
function Header() {
  return (
    <div className="flex flex-row justify-between p-3 md:p-7 ">
      <div className="flex flex-row head-left">
        <div>
          <img src={logo} alt="" />
        </div>
        <div >
          <p className="Tweet">Tweets from Home</p>
          <p className="Bread">A Bread crumb</p>
        </div>
      </div>
      <div className="visible icon md:hidden">
        <Menu  fontSize='large'/>
      </div>
      <div className="hidden head-right md:flex ">
        <button className="text-[#00c3e6] text-[18px] font-semibold ">
          Sign in
        </button>
        <button className="p-2 pl-16 pr-16 ml-16 Home-btn rounded-3xl ">
          Home
        </button>
      </div>
    </div>
  );
}

export default Header;
