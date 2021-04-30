import CategoryList from "../../components/CategoryList"
import Carousel from "../../components/Carousel/Carousel";
import Features from "../../components/Features/ProductsFeatures";
import AboutUs from '../../components/AboutUs/AboutUs';
import BrandFeatures from '../../components/BrandFeatures/BrandFeatures';


const Home = () => {

    return(
        <div>            
            <Carousel />
            <Features />
            {/* <CategoryList />     */}
            {/* <AboutUs /> */}
            <BrandFeatures />
        </div>
    )
}

export default Home