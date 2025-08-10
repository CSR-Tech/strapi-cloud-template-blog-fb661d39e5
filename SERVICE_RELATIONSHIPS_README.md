# Service Relationships Configuration

## Overview
This document explains the relationship configuration between the `get-quote`, `service-type`, `it-service`, and `non-it-service` collections in Strapi.

## Collection Structure

### 1. Service Type Collection (`service-type`)
- **Purpose**: Main categorization for services
- **Fields**:
  - `label`: Display name (e.g., "IT Service", "Non-IT Service")
  - `slug`: Unique identifier
  - `itServices`: One-to-many relation with IT services
  - `nonItServices`: One-to-many relation with non-IT services
  - `getQuotes`: One-to-many relation with quote requests

### 2. IT Service Collection (`it-service`)
- **Purpose**: Specific IT-related services
- **Fields**:
  - `name`: Service name (e.g., "App Development", "Branding")
  - `serviceType`: Many-to-one relation with service-type

### 3. Non-IT Service Collection (`non-it-service`)
- **Purpose**: Specific non-IT related services
- **Fields**:
  - `name`: Service name (e.g., "Voice Support", "Medical Billing")
  - `serviceType`: Many-to-one relation with service-type

### 4. Get Quote Collection (`get-quote`)
- **Purpose**: Quote request form submissions
- **Fields**:
  - `Name`: Customer name
  - `PhoneNumber`: Contact phone
  - `ProjectDescription`: Project details
  - `EmailAddress`: Contact email
  - `serviceType`: Many-to-one relation with service-type
  - `itService`: Many-to-one relation with specific IT service
  - `nonItService`: Many-to-one relation with specific non-IT service

## Relationship Flow

```
Service Type (IT Service)
├── IT Services
│   ├── App Development
│   └── Branding
└── Get Quotes (filtered by service type)

Service Type (Non-IT Service)
├── Non-IT Services
│   ├── Voice Support
│   └── Medical Billing
└── Get Quotes (filtered by service type)
```

## How It Works

1. **First Dropdown**: User selects a service type (IT Service or Non-IT Service)
2. **Second Dropdown**: Based on the first selection, shows relevant services:
   - If "IT Service" is selected → Shows: App Development, Branding
   - If "Non-IT Service" is selected → Shows: Voice Support, Medical Billing

## Frontend Implementation

When implementing the frontend form:

1. **Load Service Types**: Fetch all service types for the first dropdown
2. **Load Related Services**: When a service type is selected, fetch the related services
3. **Dynamic Second Dropdown**: Populate the second dropdown based on the first selection
4. **Submit Quote**: Include both the service type and specific service in the quote submission

## API Endpoints

- `GET /api/service-types` - Get all service types
- `GET /api/it-services` - Get all IT services
- `GET /api/non-it-services` - Get all non-IT services
- `GET /api/get-quotes` - Get all quote requests
- `POST /api/get-quotes` - Create a new quote request

## Sample Data

The system has been seeded with the following data:

### Service Types
- IT Service (slug: `it-service`)
- Non-IT Service (slug: `non-it-service`)

### IT Services
- App Development
- Branding

### Non-IT Services
- Voice Support
- Medical Billing

## Deployment Notes

After making changes to the schema:
1. Run `npm run build` to rebuild the admin panel
2. Deploy to Strapi Cloud using `npm run deploy`
3. Ensure the new content types are properly synced in the cloud environment

## Troubleshooting

If the new content types don't appear in Strapi Cloud:
1. Check deployment logs for build errors
2. Verify that the build completed successfully
3. Clear any cached builds in Strapi Cloud
4. Ensure all environment variables are properly configured
