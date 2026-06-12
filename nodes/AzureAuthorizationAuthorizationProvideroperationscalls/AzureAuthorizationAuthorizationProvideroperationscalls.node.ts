import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAuthorizationAuthorizationProvideroperationscalls implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Authorization Authorization Provideroperationscalls',
                name: 'N8nDevAzureAuthorizationAuthorizationProvideroperationscalls',
                icon: { light: 'file:./azure-authorization-authorization-provideroperationscalls.png', dark: 'file:./azure-authorization-authorization-provideroperationscalls.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'RBAC enables granular policy administration for resources and resource groups.',
                defaults: { name: 'Azure Authorization Authorization Provideroperationscalls' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAuthorizationAuthorizationProvideroperationscallsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
