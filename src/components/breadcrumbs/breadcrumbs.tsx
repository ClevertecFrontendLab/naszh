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
                    return subItem.name;
                }
            }
        }
        return '';
    };

    return (
        <>
            <Box flex='0 0 8rem' />
            <Breadcrumb spacing='6px' separator={<ChevronRightIcon color='gray.800' />}>
                <BreadcrumbItem isCurrentPage={location.pathname === '/'}>
                    <BreadcrumbLink
                        as={Link}
                        to='/'
                        color={location.pathname === '/' ? '#000' : 'blackAlpha.700'}
                    >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathParts.map((part, index) => {
                    const path = `/${pathParts.slice(0, index + 1).join('/')}`;
                    const name = getBreadcrumbName(path);
                    const isLast = index === pathParts.length - 1;

                    if (location.pathname === '/juiciest' && isLast) {
                        return (
                            <BreadcrumbItem key={path} isCurrentPage={isLast}>
                                <BreadcrumbLink color='#000'>Самое сочное</BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    }

                    return (
                        <BreadcrumbItem key={path} isCurrentPage={isLast}>
                            <BreadcrumbLink
                                as={Link}
                                to={path}
                                color={isLast ? '#000' : 'blackAlpha.700'}
                            >
                                {name || part.charAt(0).toUpperCase() + part.slice(1)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </>
    );
};
