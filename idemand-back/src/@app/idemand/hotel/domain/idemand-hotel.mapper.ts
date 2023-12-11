import { IdemandHotel, IdemandHotelResponse } from '@app/idemand/hotel';
import {
    IdemandHotelBookedRooms,
    IdemandHotelCreatedAt,
    IdemandHotelDeletedAt,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
    IdemandHotelUpdatedAt,
} from '@app/idemand/hotel/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class IdemandHotelMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param hotel
     */
    mapModelToAggregate(hotel: LiteralObject, cQMetadata?: CQMetadata): IdemandHotel
    {
        if (!hotel) return;

        return this.makeAggregate(hotel, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param hotels
     */
    mapModelsToAggregates(hotels: LiteralObject[], cQMetadata?: CQMetadata): IdemandHotel[]
    {
        if (!Array.isArray(hotels)) return;

        return hotels.map(hotel => this.makeAggregate(hotel, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param hotel
     */
    mapAggregateToResponse(hotel: IdemandHotel): IdemandHotelResponse
    {
        return this.makeResponse(hotel);
    }

    /**
     * Map array of aggregates to array responses
     * @param hotels
     */
    mapAggregatesToResponses(hotels: IdemandHotel[]): IdemandHotelResponse[]
    {
        if (!Array.isArray(hotels)) return;

        return hotels.map(hotel => this.makeResponse(hotel));
    }

    private makeAggregate(hotel: LiteralObject, cQMetadata?: CQMetadata): IdemandHotel
    {
        return IdemandHotel.register(
            new IdemandHotelId(hotel.id, { undefinable: true }),
            new IdemandHotelName(hotel.name, { undefinable: true }),
            new IdemandHotelTotalRooms(hotel.totalRooms, { undefinable: true }),
            new IdemandHotelBookedRooms(hotel.bookedRooms, { undefinable: true }),
            new IdemandHotelCreatedAt(hotel.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new IdemandHotelUpdatedAt(hotel.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new IdemandHotelDeletedAt(hotel.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(hotel: IdemandHotel): IdemandHotelResponse
    {
        if (!hotel) return;

        return new IdemandHotelResponse(
            hotel.id.value,
            hotel.name.value,
            hotel.totalRooms.value,
            hotel.bookedRooms.value,
            hotel.createdAt.value,
            hotel.updatedAt.value,
            hotel.deletedAt.value,
        );
    }
}
