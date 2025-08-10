'use strict';

/**
 * send-message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-message.send-message');
