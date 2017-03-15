function myTime(){
	var d=new Date();
	var date=d.getDate();
	var month=d.getMonth()+1;
	var year=d.getFullYear();
	document.getElementById("time").innerHTML="今天是"+year+"年"+month+"月"+date+"日";
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




