# Pseudocodigo de bynary search

Sea la función que tiene la forma:

```javascript
    search(arr,low,high,searchedValue)
```

Para encontrar el medio usamos:

```javascript
    m = roundFloor(low+(low+high)/2)
```

Luego para encontrar el elemento del medio tenemos:

```javascript
    v=arr[m]
```

Luego:

```javascript
    do{
    if v=searchedValue:
        return t
    else if v>searchedValue:
        low=m+1
    else if v<searchedValue:
        high=m
    } while(low<high)
    return false
```
