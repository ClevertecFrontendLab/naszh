import { ComponentWithAs, IconProps } from '@chakra-ui/react';

export type CardProps = {
    image: string;
    alt: string;
    title: string;
    desciption: string;
    icon: ComponentWithAs<'svg', IconProps>;
    tag: string;
    bookmarks?: { type: ComponentWithAs<'svg', IconProps>; count: number }[];
};
