require.config({
    // alias library paths
    paths:{
        'domReady':'../vendor/requirejs-domready/domReady',
        'angular':'../vendor/angular/angular',
        'angular-ui-router':'../vendor/angular-ui-router/release/angular-ui-router'
    },

    // angular doesn't support AMD out of the box, put it in a shim
    shim:{
        'angular':{
            exports:'angular'
        }
    },

    //kick start app
    deps:['./bootstrap']

});
