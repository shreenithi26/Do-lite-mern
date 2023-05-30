import './Home.css';
import Nav from '../component/Nav';
import girl from '../images/girl.png';
import pcr from '../images/pcr.png';
import numone from '../images/#1.png';
import timer from '../images/timer.png';
import code from '../images/code.png';
import slantcode from '../images/slantcode.png';
import amico from '../images/amico.png';
import Image from '../images/Image.png';
import blankpc from '../images/blankpc.png';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import waves from '../images/waves.png';
import poster1 from '../images/poster1.png';
import seoimg from '../images/seoimg.png';
import se from '../images/softwareengineer.png';
import girllap from '../images/girllaptop.png';
import arrow from '../images/arrowboat.png';
import footimg from '../images/footerimg.png';
import anilogo from '../images/anilogo.png';
import Footer from '../component/Footer';

function Home() {
  return (
    



    <div className="App">
      <Nav/>
      <h1 className="heading">Bold enough <span>creativity</span></h1>
        <p className="sub-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet hac aliquet vitae nulla lectus.  </p>


        <div className='cmp1'> 
          <img src={girl} className="girl" alt='girl' />
          {/* <video src="videos\hero-banner-en-1600x852.mp4" autoplay loop muted play-inline className="bgvideo"></video> */}
          <img src={pcr} className="pcr" alt='pcr'/>
          
          <img src={numone} className="noone" alt='some' />
          <img src={timer} className="timer " alt='timer' />
          <img src={code} className="code" alt='code' />
          <p className="gd fade-in">Graphic<br/>Design</p>
          <img src={slantcode} className="slncd fadein"  alt='slantcode'/>
          <img src={amico} className="amico" alt='amico' />
          <img src={Image} className="image" alt='sumaimg' />
          <img src={blankpc} className="blankpc" alt='blankpc' />
          <img src={slide1} className="slide1" alt='slide1' />
          <img src={slide2} className="slide2" alt='slide2' />
          <img src={slide3} className="slide3" alt='slide3' />
      </div>
      <div class="service">
        <h1 class="ourservices">Our services</h1>
        <img src={waves} class="waves" alt='waves' />
    </div>

    <div class="hscroll">
        <div class="grid1">
            <section class= "hscroll1" id="slide1">
                <img src={poster1} class="poster1" alt='poster1'/>
                <div class="text1">
                    <h1 class="grades">Graphic <span class="capdes">design</span></h1>
                    <p class="sometext">The design is now, breath the</p>
                    <p class="sometext">extraordinary</p>
                </div>
                <div class="arrow1">
                    <a href="hscroll1.html">
                        <i class="fa fa-arrow-right a1" aria-hidden="true"></i>
                    </a>
                </div>
            </section>   

            <section class="hscroll2" id="slide2">
                    <div class="text2">
                      <h1 class="seopt">seo <span class="optmz">optimizer</span></h1>
                      <p class="sometext">The design is now, breath the</p>
                      <p class="sometext">extraordinary</p>
                    </div>
                    <div class="arrow1">
                        <a href="hscroll2.html">
                            <i class="fa fa-arrow-right a1" aria-hidden="true"></i>
                        </a>
                    </div>
                    <img src={seoimg} class="seoimg" alt='seoimg'/>
            </section>


            <section class= "hscroll3" id="slide3">
                <img src={se} class="se1"  alt='se'/>
                <div class="text3">
                    <h1 class="webtext">Web <span class="webdes">design</span></h1>
                    <p class="sometext">The design is now, breath the</p>
                    <p class="sometext">extraordinary</p>                
                  </div>
                <div class="arrow1">
                    <a href="hscroll3.html">
                        <i class="fa fa-arrow-right a1" aria-hidden="true"></i>
                    </a>
                </div>
            </section>

            <section class="hscroll4" id="slide4">
                <div class="text4">
                    <h1 class="blog">Blog <span class="craft">craft</span></h1>
                    <p class="sometext">The design is now, breath the</p>
                    <p class="sometext">extraordinary</p>                
                  </div>
                <div class="arrow1">
                    <a href="hscroll4.html">
                        <i class="fa fa-arrow-right a1" aria-hidden="true"></i>
                    </a>
                </div>
                <img src={girllap} class="girllaptop" alt='girllaptop' />
            </section>
        </div>
        
      </div>
      <article className='ourplans'>
          <div className='ptag'>
            <p className='our'>Our </p>
            <p className='plans'>Plans</p>
          </div>
          <div className='linearblock'>

          </div>
          <p className='smpl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eget ligula aliquam dolor, condimentum tellus. At aliquam lectus diam malesuada quis. </p>
        </article>

        <div className='box1'>
          <ul className='planss'>

            <p className='headbp'>Basic plan</p>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• some files</li>
            <li className='plan3'>• designs</li>
            <li className='plan1'>• pallere</li>
            <li className='plan2'><button className='exp'>Explore</button></li>

          </ul>
        {/* </div>
        <div > */}
          <ul className='planss'>

            <p className='headbp'>Pro plan</p>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• Free acces to files</li>
            <li className='plan3'>• Free acces to files</li>
            <li className='plan1'>• some files</li>
            <li className='plan3'>• designs</li>
            <li className='plan1'>• pallere</li>
            <li className='plan2'><button className='exp'>Explore</button></li>

          </ul>
        </div>
        <div >
        <div className='gapp'>
          <p className='tdd'>the deep dive</p>
              <img className="arrowboat" src={arrow} alt='foot'/>
              
          </div>
          {/* <div>
              <p className="texts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis morbi commodo cursus venenatis consectetur sed elit in aliquam. Elit at non enim consequat sed semper. In leo maecenas eget consectetur viverra ac, molestie</p>
          </div> */}
      </div>
      <div className='unleash'>
        <div className='p-tags'>
          <p>Unleash your</p>
          <p>Creative drive</p>
          <p>TODAY</p>
        </div>
        <div className='img'>
          <img src={footimg}  className='footimg' alt='footimg'/>
          <button className='joinnow'>Join Now</button>
        </div>
      </div>

      <div class="footing">
        <div>
            <img class="foot" src={anilogo} alt='anilogo' />
        </div>
        <div>
            <p class="texts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis morbi commodo cursus venenatis consectetur sed elit in aliquam. Elit at non enim consequat sed semper. In leo maecenas eget consectetur viverra ac, molestie</p>
        </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Home;
