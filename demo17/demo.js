let _this = this;
					  // let Url = 'http://xxx.xxx.xxx/xxx/xxx/xxx/xxx?appid=aGFsZXN1bg&ordernos=HS190305081,HS190305080';
					  axios({
						  headers: {
						  'Content-Type': 'application/json;charset=UTF-8'
						  },
						  method: 'get',
						  url: Url,
						  params: {
						  appid: appid,
						  ordernos: ordernos,
						  }
						  }).then(function (response) {
						  if (response.data.code === 0) {
						  _this.datalist = response.data.data;
						  _this.message = response.data.message;
						  }
						  }).catch(function (error) {
						  console.log(error)
						  _this.$message({
						  type: 'error',
						  message: error.message
						  })
					  })