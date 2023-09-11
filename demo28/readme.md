<!--
 * @Author: Soulmate
 * @Date: 2023-09-08 11:35:35
 * @LastEditTime: 2023-09-08 11:36:58
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \exportPdfc:\Users\A\Desktop\vehicle\WebRoot\readme.md
 * 版权声明
-->
一、封装导出功能资源明细
js文件：
1、vehicle_emission_cd\WebRoot\resources\js\plugin\pdfJs\exportPdf.js
2、vehicle_emission_cd\WebRoot\resources\js\plugin\pdfJs\html2canvas.min.js
3、vehicle_emission_cd\WebRoot\resources\js\plugin\pdfJs\jspdf.umd.min.js
css文件：
1、vehicle_emission_cd\WebRoot\resources\css\pdfExport.css

二、 根文件初始化调用导出钩子
绝对路径： vehicle_emission_cd\WebRoot\WEB-INF\jsp\page\layout\index.jsp

三、 业务页面使用导出方法

//原导出方式
<button onclick="exportPdf()"></button> 
//现导出方式
<button id="exportPdf"></button> 
  
<script>
  $(function (){
    $("#exportPdf").click(function (){
      // 隐藏模态框
      $('#sureCannel').hide();
      // 调用导出方法
      window.parent.parent.pdfContentElFunc()
    })
  })
</script>