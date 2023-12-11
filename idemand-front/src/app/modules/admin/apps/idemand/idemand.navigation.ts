import { FuseNavigationItem } from '@fuse/components/navigation';

export const idemandNavigation: FuseNavigationItem = {
    id      : 'idemand',
    title   : 'Idemand',
    type    : 'collapsable',
    icon    : 'heroicons_outline:tag',
    children: [
        {
            id   : 'hotels',
            title: 'Hotel',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/idemand/hotel',
        },
        {
            id   : 'rooms',
            title: 'Room',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/idemand/room',
        },
    ],
};