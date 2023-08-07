import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/toys?limit=20");
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error("Error fetching toys:", error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-center">All Toys</h2>
      <div className="flex flex-wrap justify-center gap-10 m-10">
        {toys.map((toy, index) => (
          <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={toy.image} alt={toy.name} />
            </figure>
            <div className="card-body">
              {toy.seller && <p>Seller: {toy.seller}</p>}
              <h2 className="card-title">{toy.name}</h2>
              <p>Sub-category: {toy.subCategory}</p>
              <p>Price: {toy.price}</p>
              <p>Available Quantity: {toy.quantity}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="
  https://i.ibb.co/ByMg6TK/stock-photo-wooden-toy-blocks-school-supplies-math-fractions-pencils-numbers-on-beige-background-bac.jpg
  " alt="" /></figure>
  <div className="card-body">

    <h2 className="card-title">Number game board</h2>
    <p className="text-lg">price:$19.99</p>
    <h2 className="text-lg">Rating: 4.5</h2>
    <div className="card-actions justify-end">
     <button className="btn btn-primary">View Details</button>
     </div>
  

  </div>
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
