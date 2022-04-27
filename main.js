
// 22.04.17 기준 중대 총인원
const defaultmembers=Array("오상엽","이철희","길정민","이주형","정은건","김경환","이윤복","전재혁","김민서","박범수","김도현","김태권","이희서","김강민","김차민","양영진","권 평","조정우","송재용","동시현");

// 컴퓨터 접속시 알림
var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform ) {
if ( filter.indexOf( navigator.platform.toLowerCase() ) >= 0 ) {
		alert("모바일에 최적화되어 있습니다");
	}
}



// 어레이 셔플
function shuffle(array) { 
	array.sort(() => Math.random() - 0.5); 
}

// ateam 인원, bteam 인원, 멤버 어레이 받고 인원 배정해서
// [[ateamArr],[bteamArr]] 로 반환 (멤버 어레이가 더 클시 열외인원 생김)
function futsal_shuffle(ateam,bteam,members){
	shuffle(members);
	let ateamarr = members.slice(0,ateam).sort();
	let bteamarr = members.slice(ateam,ateam+bteam).sort();
	let returnvalue = Array(ateamarr,bteamarr);
	return returnvalue;
}

function start(){
	for(let i=0; i<defaultmembers.length; i++){
		$(".memberarr>ul").append("<li>"+defaultmembers[i]+"</li>");
	}
	$(".memberarr>ul").css({"width":(130*defaultmembers.length)+"px"});
}


start();

let selectnum = 0;

$(".memberarr>ul>li").click(function(){
	if($(this).hasClass("select")){
		$(this).removeClass("select");
		$(this).css({"border":"2px solid rgba(255,182,185,1)"});
		selectnum-=1;
		$(".selectnum>p").text("선택인원: "+selectnum);
	}
	else{
		$(this).addClass("select");
		$(this).css({"border":"2px solid rgba(138,198,209,1)"});
		selectnum+=1;
		$(".selectnum>p").text("선택인원: "+selectnum);
	}
});


// 위치 바꾸기
let selected=null;
function changerf(){
	$(".tdisplay>ul>li").click(function(){
		if(selected==null){
			selected=$(this);
			$(this).css({"background-color":"#fdc4b6"});
		}
		else{
			selected.css({"background-color":"rgba(255,247,247,1)"});
			let tmp = selected.text();
			selected.text($(this).text());
			$(this).text(tmp);
			selected=null;
		}
	});
}


//랜덤 배정 시작
$(".button").click(function(){
    $(".tip").empty();
	$(".tdisplay>ul").empty();
	
	memberlist = $('.memberarr>ul>li').get();
	joinmember = Array();
	ateamnum = $('#teamnum').val();
	
	for(let i=0; i<memberlist.length; i++){
		if($(memberlist[i]).hasClass("select")){
			joinmember.push($(memberlist[i]).text());
		}
	}
	
	if(ateamnum>joinmember){
		alert("참가인원의 수는 1팀의 수보다 작을 수 없습니다");
		return;
	}
	
	let team = futsal_shuffle(ateamnum,ateamnum,joinmember);
	
	for(let i=0; i<team[0].length; i++){
		$(".ateam>ul").append("<li>"+team[0][i]+"</li>");
	}
	for(let i=0; i<team[1].length; i++){
		$(".bteam>ul").append("<li>"+team[1][i]+"</li>");
	}
	
	// 남는 칸 채우기
	if(team[0].length>team[1].length){
		for(let i=0; i<team[0].length-team[1].length; i++){
			$(".bteam>ul").append("<li></li>");
		}
	}
	if(team[1].length>team[0].length){
		for(let i=0; i<team[1].length-team[0].length; i++){
			$(".ateam>ul").append("<li></li>");
		}
	}
	changerf();
});
