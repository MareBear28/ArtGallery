import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ImageGallery.css'
import images, {titles, details} from './Drawings'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from  'react-icons/md'

const ImageGallery = () => {
    const [data, setData] = useState({img: '', i:0})
    
    // upon clicking on an image
    const viewImage = (img, i)=>{
        // console.log(image, i);
        setData({img, i})
    }

    const clickImage = (action) =>{
        let i = data.i;

        if (action === 'nextImage'){
            setData({img: images[i+1], i: i+1});
        }
        if (action === 'prevImage'){
            setData({img: images[i-1], i: i-1});
        }
        if (!action){
            setData({img: '', i: 0});
        }
    }

    return (
        <>
            {data.img &&

                <div className='prev-main-container'>
                    <div className='prev-image-container'>
                        <button className='close-btn' onClick={() => clickImage()}> X </button>
                        <button className='prev-next-btn' onClick={() => clickImage('prevImage')}><MdKeyboardArrowLeft/></button>
                        <img className='current-image' src={data.img}/>
                        <button className='prev-next-btn' onClick={() => clickImage('nextImage')}><MdKeyboardArrowRight/></button>
                    </div>
                    <div className='detail-btns-contianer'>
                    <button className='prev-next-btn-2' onClick={() => clickImage('prevImage')}><MdKeyboardArrowLeft/></button>
                    <div className='details'>
                        <h2>{titles[data.i]}</h2>
                        <p>{details[data.i]}</p>
                    </div>
                    <button className='prev-next-btn-2' onClick={() => clickImage('nextImage')}><MdKeyboardArrowRight/></button>
                    </div>
                </div>
            }

            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img className='gallery-image'
                                key={i}
                                src={image}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
  );
};

export default ImageGallery