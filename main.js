import Speedtest from './Speedtest.js';
import FastSpeedtest from 'fast-speedtest-api';

const test = new Speedtest({
    serverId: 14757, // Pineville, NC
    ping: 18,
    uploadMbps: 78,
    downloadMbps: 189,
    downloadPing: 8,
    uploadPing: 10,
    idleLatency: 14
});

const result = await test.fakeResults();
console.log(result);

const speedTest = new FastSpeedtest({
    token: 'YOUR_FAST_COM_TOKEN',
    verbose: false,
    timeout: 5000,
    https: true,
    urlCount: 5,
    bufferSize: 8,
    unit: FastSpeedtest.UNITS.Mbps
});

const realTimeSpeed = await speedTest.getSpeed();
console.log(`Real-time download speed: ${realTimeSpeed} Mbps`)
