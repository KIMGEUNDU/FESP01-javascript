function log(target, level, message) {
  const now = new Date();
  console.log(
    `[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`
  );
}
log('console', 'DEBUG', 'debug message...');
log('console', 'DEBUG', 'debug message2...');
log('console', 'ERROR', 'some error...');

// 커링을 시켜보자
var logger = _.curry(log);

// 사용방법 1
logger('console')('DEBUG')('Hello');

// 사용방법 2
var mylog = logger('network');
mylog.debug = mylog('DEBUG');
mylog.info = mylog('INFO');

mylog.debug('server started on port 1234');
mylog.info('server test ... OK');
