import { useState } from "react";
import images from '../Helpers/CarouselData';


function Gallery() {
    const [img, setImg] = useState(images[0].image);
    const [images] = useState(images);

    function handleImgChange(e) {
        setImg(e.tagert.src);
    }

    const imgList = images.map((img) => {
        const { title, image, id } = img;
        return (
            <img onClick={handleImgChange}
                key={id} src={image} alt={title}
            />
        )
    })
    return (
        <div className="gallery">
            <div className="main-img">
                <img src={img} alt="" />
            </div>
            <div className="thumbnails">
                {imgList}
            </div>
        </div>
    );
}

export default Gallery;