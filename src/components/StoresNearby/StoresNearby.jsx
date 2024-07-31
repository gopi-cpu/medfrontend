import React from 'react'
import './StoresNearby.css';
import { assets } from '../../assets/assets';

const StoresNearby = () => {
  return (
    <div>
        <div className="Med-loc">
        <h1 className='Med-loc-head'>Medical Stores Nearby</h1>
        <ul className='Medical-stores-list'>
            <li className='Medical-Store'>
              <img src={assets.medstore1} alt="" className='MSImage'/>
                <h2 className='MS-name'>Nellore Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.5</span></h2>
                <div className="MS-Location">RTC Bus Stant<span className='Time'>16Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore2} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Sasi Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>4.5</span></h2>
                <div className="MS-Location">Gandhi Bomma Center<span className='Time'>25Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore3} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Generic Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>2.9</span></h2>
                <div className="MS-Location">Buja Buja Nellore<span className='Time'>39Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore4} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Sha Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.4</span></h2>
                <div className="MS-Location">Chinna Bazar<span className='Time'>10Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore5} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Venkateswara Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.8</span></h2>
                <div className="MS-Location">Kondaiah Palem Gate<span className='Time'>24Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore5} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Venkateswara Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.8</span></h2>
                <div className="MS-Location">Kondaiah Palem Gate<span className='Time'>24Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore5} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Venkateswara Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.8</span></h2>
                <div className="MS-Location">Kondaiah Palem Gate<span className='Time'>24Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore5} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Venkateswara Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.8</span></h2>
                <div className="MS-Location">Kondaiah Palem Gate<span className='Time'>24Mins</span></div>
            </li>
            <li className='Medical-Store'>
            <img src={assets.medstore5} alt=""  className='MSImage'/>
                <h2 className='MS-name'>Venkateswara Medical<span className='Rattings'><img src={assets.star} alt="" className='StarRatting'/>3.8</span></h2>
                <div className="MS-Location">Kondaiah Palem Gate<span className='Time'>24Mins</span></div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default StoresNearby
