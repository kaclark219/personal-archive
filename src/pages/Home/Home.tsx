import Navigation from "../../components/Navigation/Navigation";
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll";

import Hero from "../../sections/Hero/Hero";

function Home() {
    return (
        <>
        <main>
            <HorizontalScroll>
            <Hero />
            </HorizontalScroll>
        </main>
        <Navigation />
        </>
    );
}

export default Home;