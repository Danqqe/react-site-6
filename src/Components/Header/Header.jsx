import "./Header.css"
import Stack from 'react-bootstrap/Stack';
function Header(props) {
  

  return<div className="mainHeader"><Stack direction="horizontal" gap={3}>
  <div className='leftHeader'>
    <img src="/img/free-icon-curd-403586 1.png"style={{"marginTop": "20px"}} width={40} height={40}/>
    <div className='leftHeaderText'>
    <h2 style={{"color": "white"}}  className="headertext1" >Shop of Curds</h2>
    <p style={{"color": "#9D9D9D"}} className="headertext" >Магазин лучшего и наивкуснейшего творога</p>
    </div>
    </div>

    <div className='rightHeader ms-auto'>
    <img src="/img/Group.svg" className="headerpodtext" width={20} height={20} onClick={() =>props.onCloseCart()}/>
    <span style={{"color": "white"}} className="headerpodtext" >1500 р.</span>
    <img src="/img/free-icon-hearts-138533 1.png" className="headerpodtext" width={20} height={20}/>
    <img src="/img/1315_2023_01_29_1_ 14.png" className="headerpodtext" width={20} height={20}/>
    </div>
    </Stack>

</div>
  
    
  ;

}
export default Header
