import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const path = require('path');

export default defineConfig({
    plugins: [
        laravel({input: [
            'resources/scss/app.scss',
            'resources/js/app.js',
        ],
        refresh:true
    }),
    ],
    resolve:{
        alias:{
            //ricordarsi di portarlo anche in app.js (lo trovi nella cartella resources/js/app.js) 
            //esempio: 
            '~resources' : '/resources/',

            '~bootstrap' : path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    }
});
