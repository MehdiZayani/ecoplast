'use client';
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
export default function Homepage() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <Navbar/>
            <div className="section1 flex">
                <div className="text1">
                    <p className="flex"><p className="text-lime-400">Eco</p>Plast</p> 
                    <p>Le Spécialiste</p>
                    <p>Du Recyclage</p>
                </div>
                <div className="imgbottle">
                    <Image className="imgbottle1" src='/images/pvc-for-recycling-prices.png'width={600} height={500}alt="bottle"/>
                    {/* <div className="border1"></div> */}
                </div>
            </div>
            <div className="bg-lime-400">
                <p className="text2">Comment est recyclé le PET ?</p>
            </div>
            <div className="section2 flex bg-lime-400">
                <div className="desc2">
                    <h1 className="title1">Étape 1</h1>
                    <br/>
                    <p className="section2desc">Collecte : Les articles en PET sont collectés séparément des autres déchets plastiques. Cela peut se faire par le biais de programmes de collecte sélective, de conteneurs de recyclage spécifiques ou de centres de recyclage.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" alt="bouteills en plastique" className="img2"/>
            </div>
            <div className="section3 flex">
                <div data-aos="fade-right" data-aos-duration="3000" alt="bouteills en plastique" className="img3"></div>
                <div className="desc3">
                    <h1 className="title1 text-lime-400">Étape 2</h1>
                    <br/>
                    <p className="section3desc">Tri : Les articles en PET collectés sont triés pour séparer le PET des autres types de plastiques. Cela peut être effectué manuellement ou à l'aide de machines de tri automatiques qui utilisent des techniques telles que la reconnaissance optique.</p>
                </div>
            </div>
            <div className="flex bg-lime-400">
                <div className="desc2">
                    <h1 className="title1">Étape 3</h1>
                    <br/>
                    <p className="section2desc">Broyage : Les articles en PET triés sont broyés en petits morceaux appelés "paillettes" ou "flocons". Cela permet de faciliter le traitement ultérieur et la fonte du PET.</p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="3000" alt="bouteills en plastique" className="img4"/>
            </div>
            <div className="flex">
                <div data-aos="fade-right" data-aos-duration="3000" alt="bouteills en plastique" className="img5"></div>
                <div className="desc3">
                    <h1 className="title2 text-lime-400">Étape 4</h1>
                    <br/>
                    <p className="section3desc">Lavage : Les flocons de PET sont ensuite lavés pour éliminer les contaminants tels que les résidus alimentaires, les étiquettes en papier, les encres et les autres impuretés. Le lavage peut se faire à l'eau chaude et à l'aide de produits chimiques spécifiques.</p>
                </div>
            </div>
            <div className="bg-lime-400">
                <p className="text2">Maintenent a vous de crée les nouveaux produits !</p>
            </div>
            <Footer/>
        </>
    )
}