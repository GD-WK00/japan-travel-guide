import image from "../images/japan-grid.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <img src={image} alt="heroImg.png" className="hero-img" />
            <h2 className="hero-header">Why Japan?</h2>
            <p className="hero-text">
                There are a endless number of reasons to visit Japan, as the country has something to entice almost every kind of traveler.
                <br/><br/>
                Whether you're dying to explore Japanese history and culture at the variety of UNESCO World Heritage Sites in the country, 
                indulge in diverse Japanese cuisine, 
                or experience a ride on the lighting-fast Shinkansen trains, a trip to Japanese promises adventure around every corner.
                <br/><br/>
                From the chance to visit some of the many impressive temples and castles around the country, 
                to the opportunity to take a dip in an Onsen hot spring, 
                below you'll find the best cities and the top 3 places in each of them according to our users opinion which you should visit in Japan.
            </p>
        </section>
    );
}

export default Hero;