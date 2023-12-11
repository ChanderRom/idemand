import { IdemandHotel } from '../idemand.types';
import { hotelColumnsConfig } from './hotel.columns-config';
import { HotelService } from './hotel.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';

export const hotelPaginationResolver: ResolveFn<GridData<IdemandHotel>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const hotelService = inject(HotelService);

    actionService.action({
        id          : 'idemand::hotel.list.view',
        isViewAction: true,
    });

    const gridId = 'idemand::hotel.list.mainGridList';
    gridStateService.setPaginationActionId(gridId, 'idemand::hotel.list.pagination');
    gridStateService.setExportActionId(gridId, 'idemand::hotel.list.export');

    return hotelService.pagination({
        query: QueryStatementHandler
            .init({ columnsConfig: hotelColumnsConfig })
            .setColumFilters(gridFiltersStorageService.getColumnFilterState(gridId))
            .setSort(gridStateService.getSort(gridId))
            .setPage(gridStateService.getPage(gridId))
            .setSearch(gridStateService.getSearchState(gridId))
            .getQueryStatement(),
    });
};

export const hotelNewResolver: ResolveFn<Action> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);

    return actionService.action({
        id          : 'idemand::hotel.detail.new',
        isViewAction: true,
    });
};

export const hotelEditResolver: ResolveFn<{
    object: IdemandHotel;
}> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const hotelService = inject(HotelService);

    actionService.action({
        id          : 'idemand::hotel.detail.edit',
        isViewAction: true,
    });

    return hotelService
        .findById({
            id: route.paramMap.get('id'),
        });
};
