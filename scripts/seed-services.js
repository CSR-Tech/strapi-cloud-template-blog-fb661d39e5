'use strict';

async function seedServices() {
  try {
    console.log('Seeding service types and services...');
    
    // Create Service Types
    const itServiceType = await strapi.entityService.create('api::service-type.service-type', {
      data: {
        label: 'IT Service',
        slug: 'it-service',
        publishedAt: Date.now()
      }
    });

    const nonItServiceType = await strapi.entityService.create('api::service-type.service-type', {
      data: {
        label: 'Non-IT Service',
        slug: 'non-it-service',
        publishedAt: Date.now()
      }
    });

    console.log('Service types created:', { itServiceType, nonItServiceType });

    // Create IT Services
    const appDevelopment = await strapi.entityService.create('api::it-service.it-service', {
      data: {
        name: 'App Development',
        serviceType: itServiceType.id,
        publishedAt: Date.now()
      }
    });

    const branding = await strapi.entityService.create('api::it-service.it-service', {
      data: {
        name: 'Branding',
        serviceType: itServiceType.id,
        publishedAt: Date.now()
      }
    });

    console.log('IT Services created:', { appDevelopment, branding });

    // Create Non-IT Services
    const voiceSupport = await strapi.entityService.create('api::non-it-service.non-it-service', {
      data: {
        name: 'Voice Support',
        serviceType: nonItServiceType.id,
        publishedAt: Date.now()
      }
    });

    const medicalBilling = await strapi.entityService.create('api::non-it-service.non-it-service', {
      data: {
        name: 'Medical Billing',
        serviceType: nonItServiceType.id,
        publishedAt: Date.now()
      }
    });

    console.log('Non-IT Services created:', { voiceSupport, medicalBilling });

    console.log('Service seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding services:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await seedServices();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
