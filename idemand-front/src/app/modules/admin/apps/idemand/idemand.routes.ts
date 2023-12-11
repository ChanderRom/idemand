/* eslint-disable max-len */
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { IdemandComponent } from './idemand.component';
import { HotelListComponent } from './hotel/hotel-list.component';
import { HotelDetailComponent } from './hotel/hotel-detail.component';
import { hotelEditResolver, hotelNewResolver, hotelPaginationResolver } from './hotel/hotel.resolvers';
import { RoomListComponent } from './room/room-list.component';
import { RoomDetailComponent } from './room/room-detail.component';
import { roomEditResolver, roomNewResolver, roomPaginationResolver } from './room/room.resolvers';

export default [
    {
        path     : '',
        component: IdemandComponent,
        children : [
            { path: 'hotel', component: HotelListComponent, resolve: { data: hotelPaginationResolver }, data: { permission: 'idemand.hotel.get' }},
            { path: 'hotel/new', component: HotelDetailComponent, resolve: { data: hotelNewResolver }, data: { permission: 'idemand.hotel.create' }},
            { path: 'hotel/edit/:id', component: HotelDetailComponent, resolve: { data: hotelEditResolver }, data: { permission: 'idemand.hotel.get' }},
            { path: 'room', component: RoomListComponent, resolve: { data: roomPaginationResolver }, data: { permission: 'idemand.room.get' }},
            { path: 'room/new', component: RoomDetailComponent, resolve: { data: roomNewResolver }, data: { permission: 'idemand.room.create' }},
            { path: 'room/edit/:id', component: RoomDetailComponent, resolve: { data: roomEditResolver }, data: { permission: 'idemand.room.get' }},
        ],
        providers: [
            {
                provide : TRANSLOCO_SCOPE,
                useValue: 'idemand',
                multi   : true,
            },
        ],
    },
];
