if(typeof(storage) != "undefined"){
    localStorage.setItem("autor","Mariano");
    var autor=localStorage.getItem("autor");
    localStorage.removeItem("autor");
}else{
    alert("No esta iniciado");
}