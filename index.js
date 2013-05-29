
var global = function(){return this}()
var performance = global.performance

/**
 * Get a timestamp
 * 
 * @return {Number}
 * @api public
 */

module.exports = function(){
  return performance.now()
}

// fallback

if (!performance || typeof performance.now != 'function') {
	module.exports = Date.now || function(){ return +(new Date) }
}
