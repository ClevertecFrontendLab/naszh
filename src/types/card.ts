import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import { UserProps } from './user';

export type CardProps = {
    image: string;
    alt: string;
    title: string;
    desciption: string;
    icon: ComponentWithAs<'svg', IconProps>;
    tag: string;
    bookmarks?: { type: ComponentWithAs<'svg', IconProps>; count: number }[];
    user?: UserProps;
};
