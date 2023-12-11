import { IdemandIHotelRepository } from '@app/idemand/hotel';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandDeleteHotelByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        id: IdemandHotelId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const hotel = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                hotel.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const hotelRegister = this.publisher.mergeObjectContext(hotel);

        hotelRegister.deleted(hotel); // apply event to model events
        hotelRegister.commit(); // commit all events of model
    }
}
