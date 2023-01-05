import { MainSection } from './Header/MainSection';
import { Navbar } from './Header/Navbar';
import { TopSection } from './Header/TopSection';

export const Header = () => {
    return (
        <>
            <TopSection />
            <MainSection />
            <Navbar />
        </>
    );
};
