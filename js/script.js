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
function X()
{
    var a = document.getElementById("builder").value;
    var b = document.getElementById("layer").value;
    var disp = '';
    var i, j;

    if (b % 2 != 0) {//bagian atas ganjil
        for ( i = 0; i < b / 2 - 1; i++) {
            if (i == b / 2) {
                for ( j = 0; j < b / 2 + 1; j++) {
                    disp += '\xa0';
                }
                disp += a + '<br>';
                
            }else {
                for ( j = -2; j < i; j++) {
                    disp += '\xa0';
                }
                disp += a;
                for ( j = 2; j < b - i*2; j++) {
                    disp += '\xa0';
                }
                disp += a + '<br>';
            }
        }
    }
    if(b % 2 != 0){
        for(i = 0; i < b/2 + 1; i++){
            disp += '\xa0';
        }
        disp += a + '<br>';
    }
    //bagian atas genap
    if (b % 2 == 0){
        for ( i = 0; i < b/2; i++){
            for ( j = -1; j < i; j++) {
                disp += '\xa0';
            }
            disp += a;
            for ( j = 1; j < b - i * 2; j++) {
                disp += '\xa0';
            }
            disp += a + '<br>';
        }
    }
    //bagian bawah genap
    if(b % 2 == 0){
        for ( i = 0; i < b/2; i++){
            for ( j = b/2 - i ; j > 0; j--){
                disp += '\xa0';
            }
            disp += a;
            for ( j = 0; j < i*2+1; j++){
                disp += '\xa0';
            }
            disp += a + '<br>';
        }
    }else {//bagian bawah ganjil
        for ( i = 0; i < b/2 - 1; i++){
            for ( j = b/2 - i ; j > 0; j--){
                disp += '\xa0';
            }
            disp += a;
            for ( j = 0; j < i*2+1; j++){
                disp += '\xa0';
            }
            disp += a + '<br>';
        }
    }
    
    
    
    document.getElementById("dispbox").innerHTML = disp; 
}