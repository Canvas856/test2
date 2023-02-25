
import React from 'react'
import { Link } from './componets/Header/Link/Link'
import { Textwelcome } from './componets/Welcome/Text hedline/texthedline'
import {Text1} from './componets/Welcome/Frame/text1'
import { ContactEmail } from './componets/Welcome/Contact/Contact'
import Line from './componets/Welcome/Frame/Line.png';
import LogoWelcome  from './componets/imges/learn-coding 1.png'
import './componets/index.css';
import './componets/App.css';
import { Button } from './componets/Header/Button/Button'
import  Logor from './componets/imges/Logo.png'
import Lupa from './componets/Header/Link/lupa.svg'
import Scroll_icon from './componets/imges/Scroll Icon.png'
import { Headlines } from './componets/Section1/text/headlines'
import Line1 from './componets/Section1/Line 3.png'
import Line2 from './componets/Section1/Frame 286.png'
import Cs from './componets/Section1/Cards/css.png'
import Js from './componets/Section1/Cards/js.png'
import Tailwind from './componets/Section1/Cards/taiwind.png'
import Vu from './componets/Section1/Cards/vue.png'
import Rec from './componets/Section1/Cards/rec.png'
import Post1 from './componets/Section2/images/Post1.png'
import Post2 from './componets/Section2/Post2.png'
import Post3 from './componets/Section2/Post3.png'
import Post4 from './componets/Section2/Post4.png'
import Post5 from './componets/Section2/Post5.png'
import Post6 from './componets/Section2/Post6.png'
import Post7 from './componets/Section2/Post7.png'
import Post8 from './componets/Section2/Post8.png'
import Post9 from './componets/Section2/Post9.png'
import Post10 from './componets/Section2/Post10.png'
import Post11 from './componets/Section2/Post11.png'
import Post12 from './componets/Section2/Post12.png'
import { ArticleButton } from './componets/Section2/ArticleButton'
import Post from './componets/imges/Icon.png'
import { LinkLittle } from './componets/Footer/LinkLittle'
import { Pictures } from './componets/Footer/Pictures'
import monogram from './componets/Footer/Monogram.png'
import vector from './componets/Footer/Vector.png'
import inst from './componets/Footer/instagram.png'
import ini from './componets/Footer/linkedin.png'
import Line4 from './componets/Footer/Line 4.png'
import {Text2} from './componets/Footer/Text2'
import { LinkHeadl } from './componets/Footer/LinkHeadl'
function App() {
  return (
    <>
<header>
<div className ="navBar">
<div className='container1'>
<img src={Logor} alt="kokok"/> 
</div>
<div className="container2">
<Link linkTitle='Home' />
<Link linkTitle='Category' />
<Link linkTitle='About Me' />
<img src={Lupa} alt="pictures" className='lupa'/>
<Link linkTitle='Search'/>
</div>
<div className='container3'>
<Button buttoninput='Buy Me a Coffee' classes='smal'/>
</div>
 </div>
<div className="scrolls">
<div className='block1'>
<div className='block_item1'>
<Textwelcome/>
</div>
<div className='block_item2'>
<img src={Line} alt="pictures"/>
<Text1 title='On this blog I share tips and tricks, frameworks, projects, tutorials, etc
Make sure you subscribe to get the latest updates'/>
</div>
<div className='block_item3'>
<ContactEmail title='Subscribe'/>
</div>
</div>
<div className='block2'>
<img src={LogoWelcome} alt="pictures"/>
</div>
</div>
<picture>
<img src={Scroll_icon} alt="pictures" className='pic2'/>
</picture>
</header>  








<section className='section1'>
<div className='section_item1'>
<div className='text1'>
<img src={Line1} alt="pictures"/>
<Headlines text='Browse the category'/>
</div>
<div className='text2'>
<Headlines text='see all category'/>
<img src={Line2} alt="pictures"/>
</div>
</div>
<div className='section_item2'>
<img src={Cs} alt="pictures"/>
<img src={Js} alt="pictures"/>
<img src={Tailwind} alt="pictures"/>
<img src={Vu} alt="pictures"/>
<div className='Card5'>
<img src={Rec} alt="pictures"/>
</div>
</div>
</section>
<section className='section2'>
<article className='sec1'>
<div className='write1'>
<img src={Line1} alt="pictures"/>
<Headlines text='Featured Article'/>
</div>
<div className='write2'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/>
</div>
</article>
<div className='Posts1'>
<img src={Post1} alt="pictures"/>
<img src={Post2} alt="pictures"/>
<img src={Post3} alt="pictures"/>
<img src={Post4} alt="pictures"/>
</div>
<article className='sec2'>
<div className='write3'>
<img src={Line1} alt="pictures"/>
<Headlines text='CSS'/> 
</div>
<div className='write4'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/> 
</div>
</article>
<div className='Posts2'>
<img src={Post5} alt="pictures"/>
<img src={Post2} alt="pictures"/>
<img src={Post6} alt="pictures"/>
<img src={Post3} alt="pictures"/>
</div>
<article className='sec3'>
<div className='write5'>
<img src={Line1} alt="pictures"/>
<Headlines text='Javascript'/>
</div>
<div className='write6'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/>
</div>
</article>
<div className='Posts3'>
<img src={Post7} alt="pictures"/>
<img src={Post1} alt="pictures"/>
<img src={Post8} alt="pictures"/>
<img src={Post9} alt="pictures"/>
</div>
<article className='sec4'>
<div className='write7'>
<img src={Line1} alt="pictures"/>
<Headlines text='React JS'/>
</div>
<div className='write8'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/> 
</div>
</article>
<div className='Posts4'>
<img src={Post10} alt="pictures"/>
<img src={Post11} alt="pictures"/>
<img src={Post12} alt="pictures"/>
<img src={Post4} alt="pictures"/>
</div>
<ArticleButton articlebutton='More Article'/>
</section>
<section className='section3'>
<img src={Post} alt="pictures" className='post'/>
<div className='text3'>
<h2 className='subscribe2'>Subscribe For the lastest updates</h2>
<Text1 title='Subscribe to newsletter and never miss the new post every week.'/>
</div>
<div className='button1'>
<ContactEmail title='Subscribe'/>
</div>
</section>
<footer>
<div className='Aboutweb'>
<img src={Logor} alt="kokok"/> 
<p  className='LinkLittle'>Digitaldastin by Dastin Darmawan</p>
<div className='Picturesl'>
<Pictures picturestitle={monogram}/>
<Pictures picturestitle={vector}/>
<Pictures picturestitle={inst}/>
<Pictures picturestitle={ini}/>
</div>
</div>

<div className='Page'>
<div className='Links'>
<LinkHeadl linkheadl='Category'/>
<LinkLittle littletittle='CSS'/>
<LinkLittle littletittle='Javascript'/>
<LinkLittle littletittle='Tailwind'/>
<LinkLittle littletittle='React JS'/>
<LinkLittle littletittle='More Category'/>
</div>
<div className='Links'>
<LinkHeadl linkheadl='About Me'/>
<LinkLittle littletittle='About Me'/>
<LinkLittle littletittle='Projects'/>
<LinkLittle littletittle='Achievement'/>
</div>
<div className='Links'>
<LinkHeadl linkheadl='Get in touch'/>
<LinkLittle littletittle='+62-8XXX-XXX-XX'/>
<LinkLittle littletittle='demo@gmail.com'/>
</div>
<div className='Links'>
<LinkHeadl linkheadl='Follow Us'/>
<LinkLittle littletittle='Medium'/>
<LinkLittle littletittle='Instagram'/>
<LinkLittle littletittle='Twitter'/>
<LinkLittle littletittle='Facebook'/>
</div>
</div>
</footer>
<div className='footerlittle'>
<Pictures picturestitle={Line4}/>  
<div className='text4'>
<Text2 texttitle='© 2022 Digitaldastin'/>
<Text2 texttitle='Made With ❤️ Jakarta, Indonesia'/>
</div>
</div>
</>
)
}
export default App;
