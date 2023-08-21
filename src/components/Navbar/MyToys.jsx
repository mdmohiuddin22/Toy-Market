import { useEffect, useState } from "react";

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("https://educational-toy-market-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6 m-5">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative">
            <img  src={image.url} alt={`Image ${index}`} className="rounded-lg hover:scale-105 transition-transform duration-300 gap-5 " />
            <div className="">
              <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
              <p className="text-white text-sm">{image.description}</p>
            </div>
            {/* <div className="card card-compact w-96 bg-base-100 shadow-xl"> */}
            <div className="">
  <figure><img className="rounded-lg" src="https://i.ibb.co/VL56N7B/stock-photo-portrait-of-child-in-classroom-kid-with-toy-virtual-reality-headset-in-class-success-ide.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Kid with toy virtual reality headset in class</h2>
    <h2 className="text-lg font-bold text-center">Price: $19.99</h2>
    <p className="text-lg font-bold text-center">Rating: 4.5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-center mr-16">View Details</button>
    </div>
  </div>
</div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default GallerySection;


