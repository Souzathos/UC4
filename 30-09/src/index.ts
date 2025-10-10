function mostraTamanho <T extends {length:number}>(item: T):void{ 
    for(let i = 0; i < item.length; i++){
        console.log(item[i])
    }
}

mostraTamanho("simba")
mostraTamanho([1, 2, 3])