const { getConfig } = require('../libs/getConfig');
const { generateComponent } = require('../libs/generate');
const config = getConfig();
generateComponent(config);

export {};
