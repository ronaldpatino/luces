enyo.kind({
	name: "App",
	fit: true,
	components:[
		{name: "hello", content: "Hello World", allowHtml: true},
		{kind: "Switch", texto:"Luz Estudio", luzId:0},
		{kind: "Switch", texto:"Luz Hall", luzId:1}
	],
	
});
