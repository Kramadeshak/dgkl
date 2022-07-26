import Image from 'next/image'

const TopNavigation=()=>{
    return (
        <div className="top-navigation">
            <DGKLTitle/>
            <Logo />
            <Coordinates/>
        </div>
    );
};

const Logo = () => <Image src="/Sarthak Blog 2-03.svg"  className='logo' width={100} height={100} />;
const Coordinates = () => <h1 className='absolute right-5 top-5'>45°N7588.99E</h1>;
const DGKLTitle = () => <h1 className='absolute left-5 top-5'>//dgkl</h1>;
export default TopNavigation;