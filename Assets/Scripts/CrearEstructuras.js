//Este Script es utilizado para contruir GameObjects dependiendo del dinero que tengamos


public static var Puntos :int = 0; //inicialmente tendremos un dinero de 2000
// estas tres Texture2D son los botones para consruir
var cajaIcono : Texture2D;
var esferaIcono : Texture2D;
var cilindroIcono : Texture2D;
// esttos son los costos de cada GameObject
var costoCubo : int = 1;
var costoEsfera : int = 1;
var costoCilindro : int = 1;
//para el texto
var Texto : TextMesh;
//para mover la camara
var velocidad:float = 2.0;
var angulo : float = 20;
// para cargar las construcciones
private var Construcciones;
private var ConstruccionesCost : int = 0;

function Start(){
	//referencio a mi texto
	Texto.text = "Puntos: "+Puntos;
}
/* esta funcion OnGUI permite construir los botones en la camara pricipal.
	permite crear la interfaz.
*/
function OnGUI(){
	/* CREAMOS LOS BOTONES
		Rect(X,Y,Ancho, Alto)		GUIContent(Icono, Mensaje en pantalla)
	*/
	if(GUI.Button(Rect(-3.2,3.5,50,50),GUIContent( cajaIcono,"Creo una caja")))
	{
		Construcciones = GameObject.Find("Cube");//instanciamos el nombre del GameObject
		ConstruccionesCost = costoCubo;
	}
	// Boton para la esfera
	if(GUI.Button(Rect(60,10,50,50),GUIContent( esferaIcono," Creo una esfera")))
	{
		Construcciones = GameObject.Find("Sphere");//instaciamos el Nombre del GameObject
		ConstruccionesCost = costoEsfera;
	}
	
	// Boton para el cilindro
	if(GUI.Button(Rect(110,10,50,50),GUIContent( cilindroIcono,"Creo un Cilindro")))
	{
		Construcciones = GameObject.Find("Cilindro");//instanciamos el Nombre del GameObject
		ConstruccionesCost = costoCilindro;
	}
 
}

//Funcion que se ejecuta frames por segundo
function Update(){
	//Si oprimo el boton izquierdo del mouse
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit;// es utilizado para medir distancias
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition); //cree un rayo a desde hasta donde se hace clic
	}
	//Si tenemos dinero y hemos seleccionado un boton y tenemos el punto a donde dimos clic
	if(Physics.Raycast(ray,hit,300)&& Construcciones){ //&& Dinero <= ConstruccionesCost
		Instantiate(Construcciones,hit.point,Quaternion.identity);// instanciamos el gameObject a donde dimos clic
		switch(Construcciones){
			case GameObject.Find("Sphere"):
				
				Puntos += costoEsfera;
				
				break;
			case GameObject.Find("Cube"):
				
					Puntos += costoCubo;
				
				break;
			case GameObject.Find("Cilindro"):
				Puntos += costoCilindro;
				
				
				break;
			default:
				print ("Escoja un objeto!");
				break;
				
		}
		Texto.text = "Puntos: "+Puntos;
	}
	/* IMPRIMIOS CUANDO NO HAYA DINERO
	if(Dinero > ConstruccionesCost){
		print("No hay dinero");
	}
	*/// PARA MOVER LA CAMARA CON LAS FLECHAS DEL TECLADO
	// flecha arriba
	if(Input.GetKey(KeyCode.UpArrow)){
		transform.Translate(0,0,velocidad*Time.deltaTime);
	}
	//flecha abajo
	if(Input.GetKey(KeyCode.DownArrow)){
		transform.Translate(0,0,-velocidad*Time.deltaTime);
	}
	//flecha derecha
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Rotate(0,angulo*Time.deltaTime,0);
	}
	//flecha izquierda
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Rotate(0,-angulo*Time.deltaTime,0);
	}
}