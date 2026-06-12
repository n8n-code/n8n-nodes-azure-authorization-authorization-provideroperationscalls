import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAuthorizationAuthorizationProvideroperationscallsApi implements ICredentialType {
        name = 'N8nDevAzureAuthorizationAuthorizationProvideroperationscallsApi';

        displayName = 'Azure Authorization Authorization Provideroperationscalls API';

        icon: Icon = { light: 'file:../nodes/AzureAuthorizationAuthorizationProvideroperationscalls/azure-authorization-authorization-provideroperationscalls.png', dark: 'file:../nodes/AzureAuthorizationAuthorizationProvideroperationscalls/azure-authorization-authorization-provideroperationscalls.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Authorization Authorization Provideroperationscalls API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
