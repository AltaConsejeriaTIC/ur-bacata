#pragma strict

function Start () {

}

function Update () {
if(Input.GetMouseButtonDown(0)){ //Click izq Mouse
Invoke("cargar",1);

	}

}

function cargar(){
Application.LoadLevel("Terreno");
}