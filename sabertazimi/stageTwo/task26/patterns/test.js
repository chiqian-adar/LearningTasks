var pubsub = require('./pubsubz.js'),
    command = require('./command.js');

(function () {
    console.log('');
    console.log('Observer Pattern: ');

    // add observer to observerlist
    var testFirstSub = pubsub.subscribe( 'login', function (topic , data ) {
            console.log( topic + ": " + data );
        });
    // permanent subscribe
    pubsub.subscribe('sum', function (topic, data) {
        if (toString.apply(data) !== '[object Array]') {
            console.log(topic + ': Please input array: * ' + data + ' * is not array!');
        } else {
            var tmp = data.filter(function (item) {
                    return  command.execute('isNumber', item);
                });

            if (tmp.length) {
                var sum = tmp.reduce(function (previous, current) {
                    return previous + current;
                }, 0);
                console.log(topic + ': sumof ' + data + ' : ' + sum);
            } else {
                console.log(topic + ': Please input number array: * ' + data + ' * is not number array!');
            }
        }
    });
    // advanced subscribe
    pubsub.subscribe('login/extend', function (topic, name, age, date) {
        console.log(topic + ': ' + name + ' - ' + age + ' - ' + date);
    });

    // subject broadcast/notify, observer update
    pubsub.publish( 'login', 'hello world!' );
    pubsub.publish( 'login', [{'color':'blue'},{'text':'hello'}] );
    pubsub.unsubscribe(testFirstSub);
    pubsub.publish( 'login', 'hello again!' );
    console.log('');

    pubsub.publish('sum', 'hello again!');
    pubsub.publish('sum', [1, 2, 3, 4, 5]);
    pubsub.publish('sum', ['a', 'b', 'c', 'd', 'e']);
    console.log('');

    pubsub.publish('login/extend', 'sabertazimi', 17, new Date());
    pubsub.publish('login/extend', 'archer', 500, 'DC 2000');
}());

(function () {
    console.log('');
    console.log('Command Pattern: ');

    console.log(command.execute('isNull', null));             // true
    console.log(command.execute('isNull', 'sabertazimi'));    // true
    console.log(command.execute('isArray', new Array(5)));    // true
    console.log(command.execute('isArray', 'sabertazimi'));   // true
    console.log(command.execute('isString', 'sabertazimi'));  // true
    console.log(command.execute('isString', 14800));
}());
