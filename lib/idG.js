function idG(arr) {
    let id = 0
    arr.forEach(el => {
        if(el.id>id){
            id=el.id
        }
        
    });
    return id+1
    
}

module.exports= {idG}