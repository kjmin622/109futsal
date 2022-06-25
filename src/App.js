/* eslint-disable */

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	
	// 초기 이름리스트
	const names = [
		"오상엽","이철희","길정민","이주형","정은건","김경환","이윤복","전재혁","김민서","박범수","김도현","김태권","이희서","김강민","김차민","양영진","권 평","조정우","송재용","동시현","신호진","정상제"
	];

	// 로컬에 저장된 리스트가 있으면 그걸로 설정
	let namelist, namelistedit;
	try{
		[namelist,namelistedit] = useState(JSON.parse(localStorage.getItem("109futsalnamelist")));
		if(!Array.isArray(namelist)){
			throw new Error();
		}
	}
	catch{
		[namelist,namelistedit] = useState(names);
		localStorage.setItem("109futsalnamelist",JSON.stringify(namelist));
	}
	
	let displaynamelist = namelist.map((name)=>{return (<li>{name}</li>)});
	
	
	
	return (
	<body>
		<div className="title">
			<div>
				<p>
					본부 풋살 팀배정기 Ver. 22.06.11 (Mobile)
				</p>
			</div>
		</div>

		<div className="memberarr">
			<ul>
				{displaynamelist}
			</ul>
		</div>

		<div className="menubar">
			<div className="menus selectnum">
				<p>
					선택인원: 0
				</p>
			</div>
			<div className="menus teamnum">
				<p>
					팀인원: <input type="text" id="teamnum" name="teamnum" size="1" value="6"/>
				</p>
			</div>
		</div>

		<div className="button">
			<p>
				랜덤 배정하기
			</p>
		</div>


		<div className="tip">
			<p>
				<br/>
				*도움말*<br/>
				1. 이름 터치해서 참가할 인원 선택<br/>
				2. 각 팀인원 설정 (기본값 6의 경우 6대6)<br/>
				3. 랜덤 배정하기 버튼 누르기<br/>
				4. 팀 배정된 두 사람 터치하여 바꾸기 가능<br/>
			</p>
		</div>

		<div className="tdisplay ateam">
			<ul>
			</ul>
		</div>
		<div className="tdisplay bteam">
			<ul>
			</ul>
		</div>
	</body>
	);
}

function Namebox(){
	return(
		<div>
			
		</div>
	)
}

export default App;
