

const Banner = () => {
  return (
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
    <img  src="https://i.ibb.co/XxMDXCV/photo-1500995617113-cf789362a3e1-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" className="w-full m-6 rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/27Zqpk8/photo-1596464716127-f2a82984de30-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" className="w-full m-6 rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4t7dnRb/photo-1537655780520-1e392ead81f2-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" className="w-full m-6 rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4t7dnRb/photo-1537655780520-1e392ead81f2-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" className="w-full m-6 rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;