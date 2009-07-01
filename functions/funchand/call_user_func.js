function call_user_func(cb, parameters) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: call_user_func('isNaN', 'a');
    // *     returns 1: true

    var func;
 
    if (typeof cb == 'string') {
        if (typeof this[cb] == 'function') {
            func = this[cb];
        } else {
            func = (new Function(null, 'return ' + cb))();
        }
    } else if (cb instanceof Array) {
        func = eval(cb[0]+"['"+cb[1]+"']");
    }
    
    if (typeof func != 'function') {
        throw new Error(func + ' is not a valid function');
    }

    return func.apply(null, Array.prototype.slice.call(arguments, 1));
}