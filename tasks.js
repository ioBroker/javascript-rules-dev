const { copyFileSync, existsSync, mkdirSync } = require('node:fs');

if (!existsSync(`${__dirname}/build`)) {
    mkdirSync(`${__dirname}/build`);
}
copyFileSync(`${__dirname}/src/types.d.ts`, `${__dirname}/build/types.d.ts`)