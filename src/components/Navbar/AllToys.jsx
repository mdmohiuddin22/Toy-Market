// import { useEffect, useState } from "react";

// const AllToys = () => {
//   const [toys, setToys] = useState([]);

//   useEffect(() => {
//     fetchToys();
//   }, []);

//   const fetchToys = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/toys?limit=20");
//       const data = await response.json();
//       setToys(data);
//     } catch (error) {
//       console.error("Error fetching toys:", error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-4xl font-bold mb-6 text-center">All Toys</h2>
//       <div className="flex flex-wrap justify-center gap-10 m-10">
//         {toys.map((toy, index) => (
//           <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
//             <figure>
//               <img src={toy.image} alt={toy.name} />
//             </figure>
//             <div className="card-body">
//               {toy.seller && <p>Seller: {toy.seller}</p>}
//               <h2 className="card-title">{toy.name}</h2>
//               <p>Sub-category: {toy.subCategory}</p>
//               <p>Price: {toy.price}</p>
//               <p>Available Quantity: {toy.quantity}</p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">View Details</button>
//                 <div className="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure><img src="
//   https://i.ibb.co/ByMg6TK/stock-photo-wooden-toy-blocks-school-supplies-math-fractions-pencils-numbers-on-beige-background-bac.jpg
//   " alt="" /></figure>
//   <div className="card-body">

//     <h2 className="card-title">Number game board</h2>
//     <p className="text-lg">price:$19.99</p>
//     <h2 className="text-lg">Rating: 4.5</h2>
//     <div className="card-actions justify-end">
//      <button className="btn btn-primary">View Details</button>
//      </div>
  

//   </div>
// </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllToys;

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
            {/* <img  src={image.url} alt={`Image ${index}`} className="rounded-lg hover:scale-105 transition-transform duration-300 gap-5" /> */}
            <img  src={image.url} alt={`Image ${index}`} className="rounded-lg hover:scale-105 transition-transform duration-300 gap-5 " />
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"> */}
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


