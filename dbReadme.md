Para obtener la lista de emisores hacer un GET a 
https://hack-surround.firebaseio.com/emisors/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB

Para crear un emisor hacer un POST a
https://hack-surround.firebaseio.com/emisors/{channel}/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB
con 

```
{
    "peerId" : peerId
	"title" : title
}
```

Recibiremos un JSON con el id del emisor
```
{
  "name": "-KTYnsNmmrQ0C2JIJUis"
}
```

Para obtener la lista de receptores hacer un GET a 
https://hack-surround.firebaseio.com/receivers/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB

Para crear un emisor hacer un POST a
https://hack-surround.firebaseio.com/receivers/{channel}/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB
con 

```
{
    "peerId" : peerId
	"title" : title
}
```

Recibiremos un JSON con el id del receptor
```
{
  "name": "-KTYnsNmmrQ0C2JIJUiz"
}
```