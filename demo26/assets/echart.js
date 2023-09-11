var myChart = echarts.init(document.getElementById("chart"));
// 指定图表的配置项和数据
 
var data = [
	{ value: 40, name: "rose 1" },
	{ value: 38, name: "rose 2" },
	{ value: 32, name: "rose 3" },
	{ value: 30, name: "rose 4" },
	{ value: 28, name: "rose 5" },
	{ value: 26, name: "rose 6" },
	{ value: 22, name: "rose 7" },
	{ value: 18, name: "rose 8" }
];
var option = {
	title: {
		text: "动态饼图",
		subtext: "副标题",
		left: "center"
	},
	legend: {
		top: "bottom"
	},
	toolbox: {
		show: true,
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			restore: { show: true },
			saveAsImage: { show: true }
		}
	},
	graphic: [
		{
			type: "text",
			top: "center",
			left: "center",
			style: {
				text: "10000",
				fill: "#333333",
				fontSize: 20,
				fontWeight: "normal"
			}
		}
	],
	tooltip: {
		trigger: "item",
		formatter: "{b} : {c} ({d}%)"
	},
	series: [
		{
			name: "Nightingale Chart",
			type: "pie",
			radius: ["20%", "40%"],
			center: ["50%", "50%"],
			roseType: "area",
			itemStyle: {
				borderRadius: 8
			},
			data: data
		}
	]
};
 
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
 
// 监听容器大小变化
window.addEventListener("resize", function () {
	myChart.resize();
});
 
var autoInterval = autoShowPieTooltip(myChart, data.length);
 
// 鼠标悬停在饼图上时停止，离开继续
$(".chart")
	.mouseenter(function () {
		console.log(123);
		clearInterval(autoInterval);
	})
	.mouseleave(function () {
		autoInterval = autoShowPieTooltip(myChart, data.length);
	});
 
/**
 * 自动切换显示饼状图提示
 */
function autoShowPieTooltip(chart, length) {
	let lastIndex = 0;
	let currentIndex = 0;
	let autoInterval = setInterval(() => {
		chart.dispatchAction({
			type: "downplay",
			seriesIndex: 0,
			dataIndex: lastIndex
		});
		chart.dispatchAction({
			type: "highlight",
			seriesIndex: 0,
			dataIndex: currentIndex
		});
		chart.dispatchAction({
			type: "showTip",
			seriesIndex: 0,         
			dataIndex: currentIndex
		});
		lastIndex = currentIndex;   
		++currentIndex;
		if (currentIndex >= length) {
			currentIndex = 0;
		}
	}, 1000);
 
	return autoInterval;
}