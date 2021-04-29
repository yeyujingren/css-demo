import './index.scss';
let removeChargingchangeListener = () => {};
let removeLevelchangeListener = () => {};
window.onload = function () {
	const UNIT = '%';
	const percent = document.getElementById('g-number');

	let fragment = null;
	const ul = document.getElementsByClassName('g-bubbls')[0];

	function createBubblesEleHandler () {
		fragment = document.createDocumentFragment();
		for(let i = 0; i < 11; i++) {
			fragment.appendChild(document.createElement('li'));
		}
		ul.appendChild(fragment);
	}

	function removeBubblesEleHandler () {
		ul.innerHTML = '';
		fragment = null;
	}

	function transNum2percent (num) {
		return parseInt(num * 100);
	}

	let preNum = 0;
	// 检测浏览器是否支持navigator.getBattery事件，如果不存在，则默认为已经充满电
	if (navigator.getBattery) {
		navigator.getBattery()
			.then(b => {
				// charging：布尔值，表示设备当前是否正接入电源充电。如果设备没有电池，则返回 true
				// chargingTime：整数，表示预计离电池充满还有多少秒。如果电池已充满或设备没有电池，则返回 0。
				// dischargingTime：整数，表示预计离电量耗尽还有多少秒。如果设备没有电池，则返回 Infinity
				// level：浮点数，表示电量百分比。电量完全耗尽返回 0.0，电池充满返回 1.0。如果设备没有电池，则返回 1.0。
				/*************************************************************************************** */
				// 另外还提供了四个监听事件
				// onchargingchange 添加充电状态变化时的处理程序
				// onchargingtimechange  添加充电时间变化时的处理程序
				// ondischargingtimechange 添加放电时间变化时的处理程序
				// onlevelchange 添加电量百分比变化时的处理程序

				if (b.charging) {
					// 充电状态
					createBubblesEleHandler();
				}

				// 初始化的时候设置当前的电池电量
				if (b.level) {
					percent.innerText = `${transNum2percent(b.level)} ${UNIT}`;
				} else {
					percent.innerText = `100 ${UNIT}`;
				}
				const bubblesViewHandler = () => {
					if (b.charging) {
						createBubblesEleHandler();
					} else {
						removeBubblesEleHandler();
					}
				}
				const levelViewHandler = () => {
					percent.innerText = `${transNum2percent(b.level)}`;
				}
				removeChargingchangeListener = () => {
					b.removeEventListener('chargingchange', bubblesViewHandler);
				};
				removeLevelchangeListener = () => {
					b.removeEventListener('levelchange', levelViewHandler);
				};
				b.addEventListener('chargingchange', bubblesViewHandler);
				b.addEventListener('levelchange', levelViewHandler);
			})
		return;
	}
	// 获取不到对应方法，则默认为已经充电、并且充电100%
	preNum = 100;
	percent.innerText = `${preNum} ${UNIT}`;
	createBubblesEleHandler();
	return;
};

window.onbeforeunload = function () {
	removeChargingchangeListener();
	removeLevelchangeListener();
}