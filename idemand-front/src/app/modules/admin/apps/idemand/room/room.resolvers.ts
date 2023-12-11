import { IdemandRoom } from '../idemand.types';
import { roomColumnsConfig } from './room.columns-config';
import { RoomService } from './room.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';

export const roomPaginationResolver: ResolveFn<GridData<IdemandRoom>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const roomService = inject(RoomService);

    actionService.action({
        id          : 'idemand::room.list.view',
        isViewAction: true,
    });

    const gridId = 'idemand::room.list.mainGridList';
    gridStateService.setPaginationActionId(gridId, 'idemand::room.list.pagination');
    gridStateService.setExportActionId(gridId, 'idemand::room.list.export');

    return roomService.pagination({
        query: QueryStatementHandler
            .init({ columnsConfig: roomColumnsConfig })
            .setColumFilters(gridFiltersStorageService.getColumnFilterState(gridId))
            .setSort(gridStateService.getSort(gridId))
            .setPage(gridStateService.getPage(gridId))
            .setSearch(gridStateService.getSearchState(gridId))
            .getQueryStatement(),
    });
};

export const roomNewResolver: ResolveFn<Action> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);

    return actionService.action({
        id          : 'idemand::room.detail.new',
        isViewAction: true,
    });
};

export const roomEditResolver: ResolveFn<{
    object: IdemandRoom;
}> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const roomService = inject(RoomService);

    actionService.action({
        id          : 'idemand::room.detail.edit',
        isViewAction: true,
    });

    return roomService
        .findById({
            id: route.paramMap.get('id'),
        });
};
