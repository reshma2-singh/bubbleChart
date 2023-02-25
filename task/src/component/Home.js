import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AdjustIcon from '@mui/icons-material/Adjust';
import ShareIcon from '@mui/icons-material/Share';
import InsightsIcon from '@mui/icons-material/Insights';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';

function Home({result}) {
  
  console.log(result,'0')
  
  return (
    <div className='main'>
    
        <div>
         {/* sidebar 1st box code */}
            <div className='board1'>
         
          <div className="circles">
            <div className="circle1">
              <div className="grey-line"></div>
              <div className="segment blue seg1" ></div>
              <div className="segment pink seg2" ></div>
              <div className="segment pink seg3" ></div>
            </div>
            <div className="circle2">
              <div className="circular-progress-yellow">
                <div className="grey-line2"></div>
                <div className="segment yellow1" ></div>
                <div className="segment yellow2" ></div>
                <div className="segment yellow3" ></div>
              </div>

              <div className="circular-progress-inner2">
                <div className="grey-line3">
                  <div className="circular-progress-blue"></div>
                </div>
              </div>
            </div>
          </div>
            <div className='board1__one'> 
              <h6>Highest population</h6>
            <h5>{result[0] && result[0].population}</h5>
            </div>
            <div className='board1__content'>
              <div className='board1__text'>Presentation</div>
            <div className='board1__text' style={{ color: 'gray' }}>862</div>
            <div className='board1__text' style={{ color:'#8676FF',backgroundColor:'lightgrey'}}><ShowChartIcon/></div>
            </div>
          <div className='board1__content'>
            <div className='board1__text'>Development</div>
            <div className='board1__text' style={{color:'gray'}}>753</div>
            <div className='board1__text' style={{ color: '#FF708B', backgroundColor: 'lightgrey' }}><ShowChartIcon /></div>
          </div>
            </div>
        {/* sidebar 2nd box code */}
              <div className='board2'>
         
                <h4>Highest population</h4>
          <div className='board2__one'>
          <h5 className='board2__content'>{result[0] && result[0].population}</h5>
            <div className='board2__content' style={{ color:"#38F261"}}><ArrowDropUpIcon /></div>
            <p style={{ color: "#38F261" ,fontSize:'12px',marginTop:'3px'}}>2%</p>
          </div>
       
            
          <h4>Lowest population</h4>
          <div className='board2__two'>
            <h5 className='board2__content'>{result[249] && result[249].population}</h5>
            <div className='board2__content' style={{ color: "#38F261" ,marginLeft:'25px'}}><ArrowDropUpIcon /></div>
            <p className='board2__content' style={{ color: "#38F261", fontSize: '12px', marginTop: '3px' }}>0%</p>
            
          </div>
              </div>
        {/* sidebar 3rd box code */}
              <div className='board3'>
                <div className='board3__one'>
                 <p className='board3__content'>China</p>
            <p className='board3__content'style= {{ color: "gray" }}>1</p>
            <p className='board3__content'>1.4B+</p>
            <div className='board3__content' style={{ color: "#38F261" }}><ArrowDropUpIcon /></div>

                </div>
          <div className='board3__two'>
            <p className='board3__content'>India</p>
            <p className='board3__content' style={{ color: "gray" }}>2</p>
            <p className='board3__content'>1.3B+</p>
            <div className='board3__content' style={{ color: "red" }} >< ArrowDropDownIcon /></div>
          </div>
          <div className='board3__three'>
            <p className='board3__content' >USA</p>
            <p className='board3__content'style={{color:"gray"}}>3</p>
            <p className='board3__content'>8M+</p>
            <div className='board3__content' style={{ color: "#38F261" }}><ArrowDropUpIcon /></div>
          </div>
              </div>
        </div>
    <div className='home'>
      {/* table indicator code */}
      <div className='line'>
        <h5 >1W</h5>
        <h5 >1M</h5>
       
          <h5 style={{ background:"#3247E5",zIndex:"99",color:'white',width:'53px',textAlign:'center',height:'22px',borderRadius:"50px",padding:'3px'}}>3M</h5> 
        <h5 >1Y</h5>
        <h5>ALL</h5>
         
      </div>
      {/* big widget code */}
      <div className='larger'>
          {/*inside  big widget code */}  
<div className='bigWidget'>
  {/* bubbles */}
            <div className='pink1'>
              <h4>Indonesia</h4>
              <h3>{result[3] && result[3].population}</h3></div>
           <div className='purplea'></div>
              <div className='purpleb'></div>
              <div className='purplec'></div>
              <div className='purpled'></div>
              <div className='purplef'></div>
              <div className='purpleg'></div>
            <div className='pink2'>
              <h4>USA</h4>
              <h3>{result[2] && result[2].population}</h3></div>
              <div className='yellow1'></div>
            <div className='pink3'>
              <h4>India</h4>
              <h3>{result[1] && result[1].population}</h3></div> 
            <div className='pink4'>
              <h4>Pakistan</h4>
              <h3>{result[4] && result[4].population}</h3></div>
          <div className='pink5'></div>
             
            <div className='inner'>
              <h4>China</h4>
              <h3>{result[0] && result[0].population}</h3>
    </div>   
</div>
</div>
{/* outside circle bubbles */}
<div className='purple3'></div>
 <div className='purple4'></div>
 <div className='sky1'></div>
 <div className='sky2'></div>
<div className='sphere'></div>
<div className='purple1'></div>
          <div className='purple2'></div>
          <div className='rec1'>
          <div className='add'> <AddIcon /></div>
          <div className='remove'> <RemoveIcon /></div>
          </div>
          <div className='rec2'>
          <div className='adjst'> <AdjustIcon /></div>
          </div>
          <div className='rec3'>
          <div className='share'><ShareIcon /></div>
          <div className='linear'><LinearScaleIcon /></div>
          <div className='insight'><InsightsIcon /></div>
          </div>
          {/* below circle icons */}
        <div className='home__out1'>
          <AdjustIcon />
          <p>countries</p>
          <h2>250</h2>
        </div>
        <div className='home__out2'>
          <RemoveRedEyeIcon />
          <p>views</p>
          <h2>65,540</h2>
        </div>
        <div className='home__out3'>
          <LeaderboardIcon />
          <p>store dynamics</p>
          <h2>324</h2>
        </div>
    </div>
   
      </div>
  )
}

export default Home