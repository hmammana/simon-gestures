(function(e){"use strict";function t(){this.collection={};this.maxListeners=10}t.prototype.addListener=function(e,t,n){if(e===undefined){throw new Error('jvent - "addListener(event, listener)": It should receive an event.')}if(t===undefined){throw new Error('jvent - "addListener(event, listener)": It should receive a listener function.')}var r=this.collection;t.once=n||false;if(r[e]===undefined){r[e]=[]}if(r[e].length+1>this.maxListeners&&this.maxListeners!==0){throw new Error("Warning: So many listeners for an event.")}r[e].push(t);this.emit("newListener");return this};t.prototype.on=t.prototype.addListener;t.prototype.once=function(e,t){this.on(e,t,true);return this};t.prototype.removeListener=function(e,t){if(e===undefined){throw new Error('jvent - "removeListener(event, listener)": It should receive an event.')}if(t===undefined){throw new Error('jvent - "removeListener(event, listener)": It should receive a listener function.')}var n=this.collection[e],r=0,i;if(n!==undefined){i=n.length;for(r;r<i;r+=1){if(n[r]===t){n.splice(r,1);break}}}return this};t.prototype.off=t.prototype.removeListener;t.prototype.removeAllListeners=function(e){if(e===undefined){throw new Error('jvent - "removeAllListeners(event)": It should receive an event.')}delete this.collection[e];return this};t.prototype.setMaxListeners=function(e){if(isNaN(e)){throw new Error('jvent - "setMaxListeners(n)": It should receive a number.')}this.maxListeners=e;return this};t.prototype.listeners=function(e){if(e===undefined){throw new Error('jvent - "listeners(event)": It should receive an event.')}return this.collection[e]};t.prototype.emit=function(){var e=Array.prototype.slice.call(arguments,0),t=e.shift(),n,r=0,i;if(t===undefined){throw new Error('jvent - "emit(event)": It should receive an event.')}if(typeof t==="string"){t={type:t}}if(!t.target){t.target=this}if(this.collection[t.type]!==undefined){n=this.collection[t.type];i=n.length;for(r;r<i;r+=1){n[r].apply(this,e);if(n[r].once){this.off(t.type,n[r]);i-=1;r-=1}}}return this};if(typeof e.define==="function"&&e.define.amd!==undefined){e.define("Jvent",[],function(){return t})}else if(typeof module!=="undefined"&&module.exports!==undefined){module.exports=t}else{e.Jvent=e.EventEmitter=t}})(this);
(function(a){"use strict";function b(a,b){if(!Array.isArray(a))throw Error("shuffle-array expect an array as parameter.");var e,f,c=a,d=a.length;for(b===!0&&(c=a.slice());d;)e=Math.floor(Math.random()*d),d-=1,f=c[d],c[d]=c[e],c[e]=f;return c}b.pick=function(a,b){if(!Array.isArray(a))throw Error("shuffle-array.pick() expect an array as parameter.");if("number"==typeof b&&1!==b){for(var f,c=a.length,d=a.slice(),e=[];b;)f=Math.floor(Math.random()*c),e.push(d[f]),d.splice(f,1),c-=1,b-=1;return e}return a[Math.floor(Math.random()*a.length)]},"function"==typeof a.define&&void 0!==a.define.amd?a.define("shuffle",[],function(){return b}):"undefined"!=typeof module&&void 0!==module.exports?module.exports=b:a.shuffle=b})(this);
(function (window) {
    'use strict"';

    function Simon() {
        this._init();
    }

    Simon.prototype.emitter = new Jvent();

    Simon.prototype._init = function(first_argument) {
        this.colors = ['red', 'blue', 'green', 'yellow'];
        this.colorsCollection = [];
        return this;
    };

    Simon.prototype.randomColor = function() {
        this.currentColor = shuffle.pick(this.colors);
        this.colorsCollection.push(this.currentColor);
        return this;
    };

    window.Simon = Simon;

}(window));