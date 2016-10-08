Para obtener la lista de emisores hacer un GET a 
https://hack-surround.firebaseio.com/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB


Para crear un emisor hacer un POST a
https://hack-surround.firebaseio.com/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB
con 

```
{
    "center" : "",
    "left" : "",
    "right" : ""
}
```

Recibiremos un JSON con el id del emisor
```
{
  "name": "-KTYnsNmmrQ0C2JIJUis"
}
```

Para asignar un receptor a un canal hacer un PATCH a 
https://hack-surround.firebaseio.com/{idEmisor}/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB
por ejemplo con
```
{
    "center" : "7"
}
```

Para ver los canales de un receptor hacer un GET a 
https://hack-surround.firebaseio.com/{idEmisor}/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB
y recibiremos algo similar a
```
{
    "center" : "7",
	"left" : "",
	"right" : ""
}
```