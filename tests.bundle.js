var specs = require.context('./spec', true, /(_s|S)pec\.js$/);
specs.keys().forEach(specs);
