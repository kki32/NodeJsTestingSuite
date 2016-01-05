var MicroGear = require('microgear');


// describe('Create', function () {
// 	var microgear;
// 	var appkey    = 'NLc1b8a3UZPMhOY';
// 	var appsecret = 'tLzjQQ6FiGUhOX1LTSjtVKsnSExuX7';

// 	it('should save gearkey', function () {
// 		microgear = MicroGear.create({
// 			key : appkey,
// 			secret : appsecret
// 		});
// 		console.log(microgear);
// 		expect(microgear.gearkey).toEqual(appkey);
// 	});
// });

describe('Connect successfully', function () {
	var microgear;
	var connected = false;
	var appkey    = 'NLc1b8a3UZPMhOY';
	var appsecret = 'tLzjQQ6FiGUhOX1LTSjtVKsnSExuX7';
	var appid = 'testNodeJs';

    beforeEach(function () {
        microgear = MicroGear.create({
            key : appkey,
            secret : appsecret});
    });
    afterEach(function (){
        microgear.client.end();
    });

    it('Event connect', function (done) {
        microgear.on('connected', function() {
            connected = true;
            expect(connected).toBeTruthy();
            done();
        });
        microgear.connect(appid);
    }, 10000);
});


xdescribe('Connect unsuccessful due to invalid input', function () {
    var microgear;

    var connected = false;
    var appkey = 'NLc1b8a3UZPMhOY';
    var appsecret = 'tLzjQQ6FiGUhOX1LTSjtVKsnSExuX7';
    var appid = 'testNodeJs';
    var trimmedGearKey = appkey.substring(0, appkey.length - 2);

    beforeEach(function () {
        microgear = MicroGear.create({
            key: trimmedGearKey,
            secret: appsecret
        });
    });
    afterEach(function () {
        //microgear.client.end();
    });


    it('Event connect', function (done) {
        try {
            microgear.connect(appid);
        }
        catch(e){
        	console.log(e);
            expect(e.toString()).toEqual("Error: request token is not issued, please check your key and secret.");
        }
    });

});