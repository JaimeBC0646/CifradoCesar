function encryptWord(){
    var word = document.getElementById("txtWordEncrypt").value;
    var abc= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var letter = '';
    var cad = "";
    //alert(abc)
    //alert(abc.length/2 +" "+abc.length)
    for(let i = 0; i<word.length ; i++)
    {
        letter = word.at(i) //Se guarda el valor de la letra
        for(let x = 0; x<=abc.length ; x++) 
        {
            if(letter==' '){
                cad=cad+" ";
                break;
            }
            else if(letter == abc[x]) //letra = una letra en el abc?
            {
                if(x>24 && x<27 || x>51 && x<54) //posicion de la letra excede a 25?
                {
                    cad = cad + abc[x+2-(abc.length/2)]; //Minuscula se suma a la cadena ->tamaño de abecedario - la posicion de la letra (resta -1 por el arreglo)
                }
                else{
                    cad = cad + (abc[x+2]); //se suma a la cadena -> la letra cifrada de la posicion
                }
                break;
            }
        }
    }
    document.getElementById("txtEncrypt").innerHTML = "Palabra encriptada: "+cad;
}


function dcryptWord(){
    var word = document.getElementById("txtWordDecrypt").value;

    var abc= ['z','y','x','w','v','u','t','s','r','q','p','o','ñ','n','m','l','k','j','i','h','g','f','e','d','c','b','a','Z','Y','X','W','V','U','T','S','R','Q','P','O','Ñ','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
    var letter = '';
    var cad = "";

    for(let i = 0; i<word.length ; i++)
    {
        letter = word.at(i) //Se guarda el valor de la letra
        for(let x = 0; x<=abc.length ; x++) 
        {
            if(letter==' '){
                cad=cad+" ";
                break;
            }
            else if(letter == abc[x]) //letra = una letra en el abc?
            {
                if(x>24 && x<27 || x>51 && x<54) //posicion de la letra excede a 25?
                {
                    cad = cad + abc[x+2-(abc.length/2)]; //Minuscula se suma a la cadena ->tamaño de abecedario - la posicion de la letra (resta -1 por el arreglo)
                }
                else{
                    cad = cad + (abc[x+2]); //se suma a la cadena -> la letra cifrada de la posicion
                }
                break;
            }
        }
    }
    document.getElementById("txtDecrypt").innerHTML = "Palabra Desencriptada: "+cad;
}
