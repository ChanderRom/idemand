import { IdemandAddHotelsContextEvent, IdemandIHotelRepository } from '@app/idemand/hotel';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandDeleteHotelsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const hotels = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (hotels.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddHotelsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const hotelsRegistered = this.publisher.mergeObjectContext(
            new IdemandAddHotelsContextEvent(hotels),
        );

        hotelsRegistered.deleted(); // apply event to model events
        hotelsRegistered.commit(); // commit all events of model
    }
}
