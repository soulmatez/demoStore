// 导入TensorFlow.js库
// import * as tf from '@tensorflow/tfjs';
const tf = require('@tensorflow/tfjs');

// 历史数据
const data = [
  { date: '2021-01-01', value: 100 },
  { date: '2021-01-02', value: 120 },
  { date: '2021-01-03', value: 110 },
  { date: '2021-01-04', value: 130 },
  { date: '2021-01-05', value: 140 },
  { date: '2021-01-06', value: 150 },
  { date: '2021-01-07', value: 160 },
];
console.log(data.map(d => d.value))
// 将历史数据转换为张量对象
const tensorData = tf.tensor(data.map(d => d.value));

// 标准化数据
const { mean, variance } = tf.moments(tensorData)
const dataStd = tf.sqrt(variance);
const normalizedData = tensorData.sub(mean).div(dataStd);

// 准备训练数据
const inputWindow = 5;
const outputWindow = 1;
const inputTensor = [];
const outputTensor = [];

for (let i = 0; i < normalizedData.shape[0] - inputWindow - outputWindow; i++) {
  const input = normalizedData.slice(i, i + inputWindow);
  const output = normalizedData.slice(i + inputWindow, i + inputWindow + outputWindow);
  inputTensor.push(input);
  outputTensor.push(output);
}

const xs = tf.stack(inputTensor);
const ys = tf.stack(outputTensor);

// 定义模型
const model = tf.sequential();
model.add(tf.layers.lstm({ units: 10, inputShape: [inputWindow, 1] }));
model.add(tf.layers.dense({ units: outputWindow }));

// 编译模型
model.compile({
  optimizer: tf.train.adam(),
  loss: 'meanSquaredError',
});

// 训练模型
const history = model.fit(xs, ys, { epochs: 100 });

// 使用模型进行预测
const input = normalizedData.slice(normalizedData.shape[0] - inputWindow);
const prediction = model.predict(input.reshape([1, inputWindow, 1])).mul(dataStd).add(dataMean);

console.log(prediction.dataSync());