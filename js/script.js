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
            disp += " ";
        }
        for(j = b-i; j <= b; j++){
            disp += a;
        }
        disp += '<br>';
    }

    document.getElementById("dispbox").innerHTML = disp; 
}