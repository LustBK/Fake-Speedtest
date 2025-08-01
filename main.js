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

<div class="progress-bar">
  <div class="filler"></div>
</div>

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.filler {
  width: 0;
  height: 100%;
  background-color: #76c7c0;
  transition: width 0.5s ease-in-out;
}

function simulateProgressBar() {
  const filler = document.querySelector('.filler');
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      filler.style.width = width + '%';
    }
  }, 100);
}

simulateProgressBar();

