using UnityEngine;
using System.Collections;

public class CargarSplash : MonoBehaviour {
	public float delayTime = 5;
	//para cargar el splash en un determinado tiempo
	IEnumerator Start(){
		yield return new WaitForSeconds (delayTime);
		Application.LoadLevel(1);
	}

}
