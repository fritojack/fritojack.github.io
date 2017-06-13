(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

$(document).ready(function(){
    if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(pos){
	    var lat = pos.coords.latitude;
	    lat = Math.round10(lat, -2);
	    var longi = pos.coords.longitude
	    longi = Math.round10(longi, -2);
	    var accuracy = pos.coords.accuracy;
	    var appid = "&APPID=1fb70ec4bff3e558ed030d808ecdea4d"
	    var weatherlookup = "http://api.openweathermap.org/data/2.5/weather?"
	    weatherlookup += (("lat=" + lat) + ("&lon=" + longi) + appid); 

	    $.ajax({
		url: weatherlookup,

		success: function(data){
		    console.log(data);
		}
	    });
	});

		
    }
});
