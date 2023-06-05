import Header from './Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import Middlepart from './MiddlePart/MiddlePart';
import LowerPart from '../assets/LowerPart/LowerPart';
function Main(){
    return(
        <div>
            <Header/>
            <LandingPage/>
            <Middlepart/>
            <LowerPart/>
        </div>
    )
}
export default Main;