define(['require','angular','app'], function (require, ng, app){
    'use strict';

    // console.log(app);
    require(['domReady'], function (document){
        console.log('@domReady');
        // console.log(document);
        ng.bootstrap(document,['app']);
    })
});
