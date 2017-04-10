function myTime(){
	var myDate = new Date();
	var year = myDate.getEullYear();
	var month = myDate.getMonth();
	var date = myDate.getDate();
	var d = myDate.getDay();
	weekday = new Array();
	weekday[0] = "星期日";
	weekday[1] = "星期一";
	weekday[2] = "星期二";
	weekday[3] = "星期三";
	weekday[4] = "星期四";
	weekday[5] = "星期五";
	weekday[6] = "星期六";
	document.getElementById("time").innerHTML="今天是"+year+"年"+month+"月"+date+"日"+"  "+weekday[d];
}

$(function(){
	$("#switch_day").click(function(){
		$("#switch_day").removeClass("switch_btn").addClass("switch_btn_focus");
		$("#switch_date").removeClass("switch_btn_focus").addClass("switch_btn");
		$(".day_calc").css("display","block");
		$(".date_calc").css("display","none");
	});
	$("#switch_date").click(function(){
		$("#switch_date").removeClass("switch_btn").addClass("switch_btn_focus");
		$("#switch_day").removeClass("switch_btn_focus").addClass("switch_btn");
		$(".date_calc").css("display","block");
		$(".day_calc").css("display","none");
	});
});




function cala(){
	y1=document.getElementById("SY1").value;
	m1=document.getElementById("SM1").value;
	d1=document.getElementById("SD1").value;

	y2=document.getElementById("SY2").value;
	m2=document.getElementById("SM2").value;
	d2=document.getElementById("SD2").value;

	date1=new Date(y1,m1-1,d1);
	date2=new Date(y2,m2-1,d2);

	document.getElementById("result1").innerHTML=(date2-date1)/(24*60*60*1000);
}

var myweek=new Array("日","一","二","三","四","五","六");
function getweekday(weekday){
	return myweek[weekday];  
}

function calb(){
	 y3=document.getElementById("SY3").value;
	 m3=document.getElementById("SM3").value;
	 d3=document.getElementById("SD3").value;
	 dateDiff=document.getElementById("dateDiff").value;
	 startDate=new Date(y3,m3-1,d3).getTime()+dateDiff*24000*3600;
	 endDate=new Date();
	 endDate.setTime(startDate);
	 document.getElementById("result2").innerHTML=endDate.getFullYear()+"年"+(endDate.getMonth()+1)+"月"+endDate.getDate()+"日"+"星期"+getweekday(endDate.getDay());
}




