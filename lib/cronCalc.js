var CronTime = require('cron').CronTime;

module.exports = (function() {

  this.nextRun = function(interval, dateStr) {
    if( !interval ) {
      throw new Error('No cron interval supplied to nextRun!');
    }
    if( !!dateStr && !isNaN(new Date(dateStr)) ) {
      throw new Error('Non-valid date string supplied!');
    }

    var cTime = new CronTime(interval);
    var d = !!dateStr ? new Date(dateStr) : new Date();

    return cTime._getNextDateFrom(d)._d;
  };

  return this;
})();