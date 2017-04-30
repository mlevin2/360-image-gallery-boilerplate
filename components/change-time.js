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
            switch (data.time) {
                case '0:15':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 0.25);
                    document.querySelector('#point-light').setAttribute('position', { x: -10, y: 1, z: 0 });
                    break;
                case '8:15':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 1);
                    document.querySelector('#point-light').setAttribute('position', { x: -4, y: 4, z: 0 });
                    break;
                case '16:15':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 4);
                    document.querySelector('#point-light').setAttribute('position', { x: 3, y: 8, z: 0 });
                    break;
                case '24:15':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 0.25);
                    document.querySelector('#point-light').setAttribute('position', { x: 10, y: 1, z: 0 });
                    break;
            }
        });
    }

});
