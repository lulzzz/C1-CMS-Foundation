/**
 * @class
 */
function _Types () {}

_Types.prototype = {
	
	/**
	 * @type {SystemLogger}
	 */
	_logger : SystemLogger.getLogger ( "Types" ),
	
	BOOLEAN 	: "boolean",
	STRING 	 	: "string",
	NUMBER 		: "number",
	FUNCTION 	: "function",
	UNDEFINED	: "undefined",
	
	/**
	 * Autocast string to an inferred type.
	 * To be used with caution and scepsis. 
	 * @param {string} string
	 * @return {object}
	 */
	castFromString : function ( string ) {
		
		var result = string;
		
		if ( parseInt ( result ).toString () === result ) {
			result = parseInt ( result );
		} else if ( parseFloat ( result ).toString () === result ) {
			result = parseFloat ( result );
		} else if ( result === "true" || result === "false" ) {
			result = ( result === "true" );
		}
		return result;
	},
	
	/**
	 * Is it defined?
	 * @param {object} arg
	 * @return {boolean}
	 */
	isDefined : function ( arg ) {
		
		return typeof arg != Types.UNDEFINED;
	},
	
	/**
	 * Is it a function?
	 * @param {object} arg
	 * @return {boolean}
	 */
	isFunction : function ( arg ) {
		
		return typeof arg == Types.FUNCTION;
	}
}

/**
 * The instance that does it!
 * @type {_Types}
 */
var Types = new _Types ();