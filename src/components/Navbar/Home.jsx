import Banner from "../Banner/Banner";
import ClientReviews from "../ClientReviews/ClientReviews";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Blog from "./Blog";


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <ShopByCategory></ShopByCategory>
             <GallerySection></GallerySection>
             <Blog></Blog>
             <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;