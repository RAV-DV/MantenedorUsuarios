// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'menu',
    title: 'Menú',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Administrador Usuarios',
            type: 'item',
            url: '/admin_usuarios',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
        
    ]
};

export default dashboard;
