let result = document.getElementById("GFG");
 
    function changeColor(x) {
        let color = 'white';
        if(x==1) color = 'blue';
        if(x==2) color = 'yellow';
        if(x==3) color = 'red';
        if(x==4) color = 'green';
        //if(x==5) color = 'white';
        document.body.style.background = color;
    }
    let x = 0;
    function clicked() {
        x+=1;
        if(x==6) x=1;
        changeColor(x);
        result.innerHTML = "Background Color changed";
    }