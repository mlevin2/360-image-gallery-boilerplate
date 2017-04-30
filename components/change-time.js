/* global AFRAME */

AFRAME.registerComponent('change-time', {

    schema: {
        on: { type: 'string' },
        time: { type: 'string' },
        brightness: { type: 'string' },
        dashboard: { type: 'string' }
    },

    init: function () {

        var data = this.data;
        var el = this.el;

        el.addEventListener(data.on, function () {
            document.querySelector('#time').setAttribute('text', 'value', data.time + '\nSOL 24');
            document.querySelector('#dashboard').setAttribute('material', 'src', data.dashboard);
            // TODO: Kris, change the lighting here
        });
    }

});
