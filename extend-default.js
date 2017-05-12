/*jslint browser:true, plusplus:true */
/*global
    define, requirejs, require, jQuery
*/

define(function () {
    function extendDefaults(src, prop) {
        var property;

        for (property in prop) {
            if (prop.hasOwnProperty(property)) {
                src[property] = prop[property];
            }
        }
    }

    return extendDefaults;
});
