#pragma strict
var cajaplay : Texture2D;
static var nombres : String;
var texto : TextMesh;

function Start () {
	nombres = "Digite su nombre";
}

function Update () {
	
}

function OnGUI(){
	nombres = GUI.TextField(Rect(10, 10, 200, 40), nombres, 25);
	if(GUI.Button(Rect(250,10,60,40), "Acceder")){
		texto.text = ""+nombres;
		nombres = texto.text;
		Invoke("cargar",1);
	}
	
}

function cargar(){
	Application.LoadLevel("Terreno");
}