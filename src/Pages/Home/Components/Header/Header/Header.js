import Banner from '../Banner/Banner';
import Menu from '../CategoryMenu/Menu';

const Header = () => {
    return (
        <div className='grid md:grid-cols-8 mt-8 gap-5'>
            <div className='md:col-span-2'>
                <Menu />
            </div>
            <div className='md:col-span-6'>
                <Banner />
            </div>
        </div>
    );
};

export default Header;