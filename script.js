function changeColor(x){
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
    }
$(document).keydown(function(e) {
    if (e.which == '37') { //left arrow key
        $(".vertical-center").finish().animate({
            left: "+=50"
        });
    }
    if(e.which=='39'){
        $(".vertical-center").finish().animate({
            right: "-=50"
        });
    }
})
