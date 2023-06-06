import Heading from "../Heading/Heading";

const Header = () => {
    return (
        <>
            <Heading
                title='Veluvana Bali - Owl Bamboo House!'
                subtitle='Sidemen, Bali'
            ></Heading>
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className="object-cover w-full" src="https://hotelxtoronto.com/_novaimg/4906918-1481330_0_0_2200_1200_2200_1200.rc.jpg" alt="header image" />
            </div>
        </>
    );
};

export default Header;