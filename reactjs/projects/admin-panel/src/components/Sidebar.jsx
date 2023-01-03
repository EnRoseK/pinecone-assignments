import { SidebarMenu } from './Sidebar/SidebarMenu';
import { SidebarWrapper } from './Sidebar/SidebarWrapper';

export const Sidebar = () => {
    const SidebarMenuInfo = {
        title: 'Sidebar',
        items: [
            { label: 'Home', link: '/' },
            { label: 'Articles', link: '/' },
            { label: 'Users', link: '/' },
            { label: 'Files', link: '/' },
        ],
    };

    return (
        <SidebarWrapper>
            <SidebarMenu {...SidebarMenuInfo} />
        </SidebarWrapper>
    );
};
