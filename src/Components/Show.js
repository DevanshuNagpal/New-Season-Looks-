import React from "react";
import model1 from '../Assets/model1.png'
import model2 from '../Assets/model2.png'
import model3 from '../Assets/model3.png'
import model4 from '../Assets/model4.png'
import model5 from '../Assets/model5.png'
import model6 from '../Assets/model6.png'
import model7 from '../Assets/model7.png'
import model8 from '../Assets/model8.png'
import model9 from '../Assets/model9.png'
import model10 from '../Assets/model10.png'
import blue from '../Assets/blue.png'

import {IoIosAddCircle} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'

import './show.css'
const Show = () => {
  return (
    <div classNameName=" max-w-[1640px] mx-auto  font-source-code-pro md:py-10 p-5 ">
<div className="Gallery px-5 gap-15 m-auto mt-50" id="Collect" >
        <div className="box1 Box-Gallery flex justify-center ">
          <div className="model">
            <img src={model1} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
          

        </div>
        
        <div className="box2 Box-Gallery flex justify-center ">
          <div className="model">
            <img src={model2} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box3 Box-Gallery flex justify-center">
          <div className="model">
          <img src={model3} alt="/" />
          <div className="love">
            <AiOutlineHeart className="fa-regular fa-heart"/>
            <IoIosAddCircle className="fa-solid fa-circle-plus" />
          </div>
          </div>
        </div>
        <div className="box4 Box-Gallery">
          <div className="model">
            <img src={model4} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box5 Box-Gallery">
          <div className="model">
            <img src={model5} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
          <div className="blue">
            <img src={blue} alt="/"/>
           <div className="VIEW">VIEW</div>
          </div>
          
          
          <div className="change">
            <div className="bottom">
              <div className="text-left">
                <p>MADEWELL SKIRT</p>
                <div className="size"><p>S,M,L</p>
                  <p>|</p>
                  <div className="wh"></div>
                  <div className="re"></div>
                  <div className="bl"></div>
                </div>
              </div>
              <div className="text-right">
                $56
              </div>
                
            </div>
          </div>
        </div>

        <div className="box6 Box-Gallery">
          <div className="model">
            <img src={model6} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box7 Box-Gallery">
          <div className="model">
            <img src={model7} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box8 Box-Gallery">
          <div className="model">
            <img src={model8} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box9 Box-Gallery">
          <div className="model">
            <img src={model9} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="box10 Box-Gallery">
          <div className="model">
            <img src={model10} alt="/" />
            <div className="love">
              <AiOutlineHeart className="fa-regular fa-heart"/>
              <IoIosAddCircle className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Show;