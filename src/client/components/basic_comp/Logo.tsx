import * as React from "react";

const backgroundStyle = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	transform: "scale(1.1) translate(0,100px)",
	position:"absolute" as "absolute",	
}

const verticalBarStyle = {
	backgroundColor: "green",
	width: "100px",
	height: "600px",
}

const leftBarStyle = {
	backgroundColor: "#35962d",
	width: "120px",
	margin: "0px 10px 0px 20px",
	height: "300px",
	transform: "skewX(32deg) translate(-25px,0px)",
	boxShadow: "1px 5px 10px 8px black",
}

const rightBarStyle = {
	backgroundColor: "darkgreen",
	width: "120px",
	height: "300px",
	margin: "0px 20px 0px 10px",
	transform: "skewX(-32deg) translate(25px,0px)",
	boxShadow: "1px 5px 10px 8px black",
}



export function Logo(props: any){
	return (
		<div style={backgroundStyle}>
			<div style={verticalBarStyle}></div>
			<div style={leftBarStyle}></div>
			<div style={rightBarStyle}></div>
			<div style={verticalBarStyle}></div>
		</div>
	);
}
