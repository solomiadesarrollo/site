import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CategoryList from "../../components/CategoryList"
import Carousel from "../../components/Carousel/Carousel";
import Features from "../../components/Features/ProductsFeatures";
import AboutUs from '../../components/AboutUs/AboutUs';
import BrandFeatures from '../../components/BrandFeatures/BrandFeatures';


const Home = () => {
    
    const scrollToRef = (ref) => window.scrollTo(0,  Number.isInteger(ref) ? ref : ref.offsetTop - 130)  
    const executeScroll = (myRef) => scrollToRef(myRef)
    const location = useLocation()
    let myRef = ""

    useEffect(() => {
        const timer = setTimeout(()=> {   
            console.log(location.state)        
            switch(location.state !== null && location.state !== undefined ? Object.keys(location.state)[0] : ""){
                case "toHome":
                    executeScroll(0)  
                    break
                case "toCategories":
                    myRef = document.querySelector("#categories")
                    executeScroll(myRef)  
                    break
                case "toAboutUs":
                    myRef = document.querySelector("#aboutus")
                    executeScroll(myRef)  
                    break
                default:                    
                    break
            }
        }, 400)        

        return () => clearTimeout(timer);

    })
    return (
        <div >
            <Carousel />
            <Features />
            <CategoryList />
            <AboutUs />
            <BrandFeatures />
        </div>
    )
}

export default Home