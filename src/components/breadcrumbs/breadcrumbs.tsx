import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { navItems } from '../nav/nav-items';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const getBreadcrumbName = (path: string): string => {
        for (const item of navItems) {
            if (item.path === path) {
                return item.category;
            }
            for (const subItem of item.subItems) {
                if (`${item.path}/${subItem.path}` === path) {
                    return `${subItem.name}`;
                }
            }
        }
        return '';
    };

    return (
        <>
            <Box flex='0 0 8rem' />
            <Breadcrumb spacing='6px' separator={<ChevronRightIcon color='gray.800' />}>
                <BreadcrumbItem isCurrentPage={pathParts.length === 0}>
                    <BreadcrumbLink as={Link} to='/'>
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathParts.map((part, index) => {
                    const path = `/${pathParts.slice(0, index + 1).join('/')}`;
                    const name = getBreadcrumbName(path);
                    return (
                        <BreadcrumbItem key={path}>
                            <BreadcrumbLink as={Link} to={path}>
                                {name || part.charAt(0).toUpperCase() + part.slice(1)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </>
    );
};
