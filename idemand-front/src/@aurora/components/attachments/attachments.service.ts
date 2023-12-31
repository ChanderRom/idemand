import { Injectable, Injector } from '@angular/core';
import { HttpService } from '@horus/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Injectable()
export class AttachmentsService
{
    constructor(
        private _http: HttpService
    )
    {
        //this.setEndpoint('/api/v1/admin/attachment-upload'); // set api URL
    }

    setCropImage(parameters): Observable<any>
    {
        if (environment.debug) console.log('DEBUG - Crop image with parameters: ', parameters);

        return this
            ._http
            .graphQLClient()
            .mutate({
                mutation: gql`
                    mutation AdminCropAttachment ($payload:JSON!) {
                        adminCropAttachment (payload:$payload)
                    }`,
                variables: {
                    payload: parameters // add object to arguments
                },
            });
    }

    deleteAttachment(attachment): Observable<any>
    {
        if (environment.debug) console.log('DEBUG - Trigger delete attachment: ', attachment);

        return this
            ._http
            .graphQLClient()
            .mutate({
                mutation: gql`
                    mutation AdminDeleteAttachment ($attachment:AdminAttachmentInput!) {
                        adminDeleteAttachment (attachment:$attachment)
                    }`,
                variables: {
                    attachment,
                },
            });
    }
}
