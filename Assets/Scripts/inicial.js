#pragma strict
var cajaplay : Texture2D;
static var nombres : String = "Ingresa tu Nombre";
//static var texto2 : String;
var texto : TextMesh;

function Start () {

}

function Update () {

}

function OnGUI(){
nombres = GUI.TextField(Rect(10, 10, 200, 40), nombres, 25);
//if (GUI.changed)
//	Debug.Log("Update ok");
if(GUI.Button(Rect(250,10,60,40), "Acceder")){
Invoke("cargar",1);
texto.text = "Bienvenido: "+nombres;
//texto2=nombres;

	}
	
}

function cargar(){
Application.LoadLevel("Terreno");
}