function btn (){
    var a = document.querySelector('body')

    if(a.className === 'dark-theme'){

        a.className = 'light-theme' 
    }else{

        a.className = 'dark-theme' 
    }
}