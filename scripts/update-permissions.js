'use strict';

async function updatePublicPermissions() {
  try {
    console.log('Updating public permissions...');
    
    // Find the ID of the public role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: {
        type: 'public',
      },
    });

    if (!publicRole) {
      console.log('Public role not found');
      return;
    }

    console.log('Found public role:', publicRole.id);

    // Define the permissions to create
    const permissionsToCreate = [
      {
        action: 'api::get-quote.get-quote.create',
        role: publicRole.id,
      },
      {
        action: 'api::send-message.send-message.create',
        role: publicRole.id,
      },
      {
        action: 'api::service-type.service-type.find',
        role: publicRole.id,
      },
      {
        action: 'api::service-type.service-type.findOne',
        role: publicRole.id,
      },
      {
        action: 'api::it-service.it-service.find',
        role: publicRole.id,
      },
      {
        action: 'api::it-service.it-service.findOne',
        role: publicRole.id,
      },
      {
        action: 'api::service-type.service-type.find',
        role: publicRole.id,
      },
      {
        action: 'api::non-it-service.non-it-service.find',
        role: publicRole.id,
      },
      {
        action: 'api::non-it-service.non-it-service.findOne',
        role: publicRole.id,
      }
    ];

    // Create the permissions
    for (const permission of permissionsToCreate) {
      try {
        await strapi.query('plugin::users-permissions.permission').create({
          data: permission,
        });
        console.log(`Created permission: ${permission.action}`);
      } catch (error) {
        if (error.message.includes('duplicate')) {
          console.log(`Permission already exists: ${permission.action}`);
        } else {
          console.error(`Error creating permission ${permission.action}:`, error.message);
        }
      }
    }

    console.log('Public permissions updated successfully!');
  } catch (error) {
    console.error('Error updating permissions:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await updatePublicPermissions();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
