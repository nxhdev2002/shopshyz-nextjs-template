import React from 'react'

const ServiceArea = () => {
  return (
    <div className='flex justify-around flex-wrap p-4'>
        <div className="sv flex flex-row justify-center items-center basis-full md:basis-1/3">
            <div className="sv-icon">
                <img src="https://htmldemo.net/fiora/fiora/img/icon/servece-1.png" alt="Service" />
            </div>
            <div className="sv-info">
                <h3 className="font-semibold">Working Time</h3>
                <span className="font-light">Mon- Sun: 8.00 - 18.00</span>
            </div>
        </div>
        <div className="sv flex flex-row justify-center items-center basis-full md:basis-1/3">
            <div className="sv-icon">
                <img src="https://htmldemo.net/fiora/fiora/img/icon/service-2.png" alt="Service" />
            </div>
            <div className="sv-info">
                <h3 className="font-semibold">Free Shipping</h3>
                <span className="font-light">On order over $199</span>
            </div>
        </div>
        <div className="sv flex flex-row justify-center items-center basis-full md:basis-1/3">
            <div className="sv-icon">
                <img src="https://htmldemo.net/fiora/fiora/img/icon/service-3.png" alt="Service" />
            </div>
            <div className="sv-info">
                <h3 className="font-semibold">Money Back 100%</h3>
                <span className="font-light">Within 30 Days after delivery</span>
            </div>
        </div>
    </div>
  )
}

export default ServiceArea