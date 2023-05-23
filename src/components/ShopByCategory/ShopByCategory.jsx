
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
    const [toys, setToys]=useState([]);
    useEffect(()=>{
        fetch('https://educational-toy-market-server.vercel.app/toys')
        .then (res => res.json())
        .then (data => setToys(data))
    },[]);
    return (
        <div>
            <h1>All Toys:{toys.length}</h1>
 <div className="text-center">
 <h2 className="text-4xl font-extrabold mb-6">Shop By Category</h2>
             <Tabs className="text-lg">
    <TabList>
      <Tab>Educational Math Toys</Tab>
      <Tab>Educational Engineering Toys</Tab>
      <Tab>Educational Science Toys </Tab>
    </TabList>

    <TabPanel>
    <div className="flex justify-center gap-10 m-10">
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
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/HqRfFHy/stock-photo-wooden-figures-of-the-montessori-methodology-math-kids-counting-puzzle-for-kids-educatio.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cash Register</h2>
    <p className="text-lg">price:$19.99</p>
    <div className="card-actions justify-end">
      <h2 className="text-lg">Rating: 4.2</h2>
      <br/>
      <button  className="btn btn-primary justify-center">View Details</button>
    </div>
  </div>
</div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="flex justify-center gap-10 m-10">
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/Nmpt8Hq/stock-photo-little-boy-years-old-playing-chemist-chemistry-game-at-home-pure-water-pipette-equipment.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Engineering Toys</h2>
    <h2 className="text-lg">price:$19.99</h2>
    <p>Rating: 4.2</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/ByMg6TK/stock-photo-wooden-toy-blocks-school-supplies-math-fractions-pencils-numbers-on-beige-background-bac.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Wooden toy blocks</h2>
    <h2 className="text-lg">price:$19.99</h2>
    <p>Rating: 4.3</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="flex justify-center gap-10 m-10">
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/VL56N7B/stock-photo-portrait-of-child-in-classroom-kid-with-toy-virtual-reality-headset-in-class-success-ide.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Kid with toy virtual reality headset in class</h2>
    <h2 className="text-lg">price:$19.99</h2>
    <p>Rating: 4.5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/gF3zdkQ/stock-photo-a-small-nerd-in-glasses-is-holding-a-robot-a-boy-in-a-gray-shirt-and-glasses-is-sitting.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">A small nerd in glasses is holding a robot</h2>
    <h2 className="text-lg">price:$19.99</h2>
    <p>Rating: 4.3</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
    </TabPanel>
  </Tabs>
 </div>
        </div>
    );
};

export default ShopByCategory;