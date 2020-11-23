function Square() 
{
    var a = document.getElementById("builder").value;
    var b = document.getElementById("layer").value;
    var disp = '';
    var i, j;

    for(i = 0; i < b; i++)
    {
        for(j = 0; j < b; j++)
        {
            disp += a;
        }
        disp += '<br>'
    }

    document.getElementById("dispbox").innerHTML = disp;
}
function RT() 
{
    var a = document.getElementById("builder").value;
    var b = document.getElementById("layer").value;
    var disp = '';
    var i, j;

    for(i = 0; i < b; i++)
    {
        for(j = 0; j <= b-i; j++)
        {
            disp += '';
        }
        for(j = b-i; j <= b; j++){
            disp += a;
        }
        disp += '<br>';
    }

    document.getElementById("dispbox").innerHTML = disp; 
}
function IT()
{
    var a = document.getElementById("builder").value;
    var b = document.getElementById("layer").value;
    var disp = '';
    var i, j, k;

    for ( i = 0; i < b; i++){
        if (b % 2 == 0) {
            for ( j = 0; j < b - i; j++){
                disp += '\xa0\xa0';
            }
            for (k = 0; k < i+1; k++ ){
                disp += a +'\xa0 ';
            }
            for ( j = 0; j < b - i ; j++){
                disp += '\xa0\xa0';
            }
        }else{
            for ( j = 0; j < b - i + 1; j++) {
                disp += '\xa0\xa0';
            }
            for ( k = 0; k < i + 1; k++) {
                disp += a +'\xa0';
            }
            for ( j = 0; j < b - i + 1; j++) {
                disp += '\xa0\xa0';
            }
        }
        disp += '<br>';
    }

    document.getElementById("dispbox").innerHTML = disp; 
}
function Dia()
{
    var a = document.getElementById("builder").value;
    var b = document.getElementById("layer").value;
    var disp = '';
    var i, j, k;

    for ( i = 0; i < b; i++){
        if (b % 2 == 0) {
            for ( j = 0; j < b - i; j++){
                disp += '\xa0\xa0';
            }
            for (k = 0; k < i + 1; k++ ){
                disp += a +'\xa0 ';
            }
            for ( j = 0; j < b - i ; j++){
                disp += '\xa0\xa0';
            }
        }else{//angka ganjil still need repair
            for ( j = 0; j < b - i; j++) {
                disp += '\xa0\xa0';
            }
            for ( k = 0; k < i + 1; k++) {
                disp += a +'\xa0';
            }
            for ( j = 0; j < b - i; j++) {
                disp += '\xa0\xa0';
            }
        }
        disp += '<br>';
    }
    
    for ( i = b - 1; i > 0; i--){
        
        if (b % 2 == 0) {
            disp += '\xa0\xa0';
            for ( j = 0; j < b - i; j++){
                disp += '\xa0\xa0';
            }
            for (k = 1; k < i + 1; k++ ){
                disp += a +'\xa0 ';
            }
            for ( j = 0; j < b - i ; j++){
                disp += '\xa0\xa0';
            }
        }else{//angka ganjil still need repair
            for ( j = 0; j < b - i + 1; j++) {
                disp += '\xa0\xa0';
            }
            for ( k = 1; k < i + 1; k++) {
                disp += a +'\xa0';
            }
            for ( j = 0; j < b - i + 1; j++) {
                disp += '\xa0\xa0';
            }
        }
        disp += '<br>';
    }

    document.getElementById("dispbox").innerHTML = disp; 
}