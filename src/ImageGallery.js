import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image1 from './Drawings/Cobalt.png'
import Image2 from './Drawings/Embarrassed .png'
import Image3 from './Drawings/Girl.png'

const images = [
    Image1, Image2, Image3
  ]

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
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: '#2c2c6c',
                    position: 'fixed',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>
                    <button style={{position: 'absolute',top: '10px',right: '10px'}} onClick={() => clickImage()}> X </button>
                    <button onClick={() => clickImage('prevImage')}>Prev</button>
                    <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
                    <button onClick={() => clickImage('nextImage')}>Next</button>
                </div>
            }

            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block", cursor: "pointer"}}
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