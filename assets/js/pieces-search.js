// Ajax Request
function buscarDisplays() {
    var búsqueda = document.getElementsByName("capturaBúsqueda")[0].value;
    console.log("Se busca: '" + búsqueda + "'");
    if (búsqueda != "" || búsqueda != null) {
        var urlCompuesta, urlVariables = "", uriPHP, filtro = true;
        uriPHP = "admin/php-scripts/search-pieces.php";
        urlVariables = ("?búsqueda=" + búsqueda + "&filtro=" + filtro);
        urlCompuesta = (uriPHP + urlVariables);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("dataTable").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", urlCompuesta, true);
        console.log("URL: " + urlCompuesta + "\nURL Variables: " + urlVariables);
        //console.log("ModoFiltro: " + ModoFiltro);
        xmlhttp.send();
    }
    else {
        document.getElementById("dataTable").innerHTML = "";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("dataTable").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "php-scripts/ConstruirTablaRefacciones.php", true);
        console.log("URL: " + "php-scripts/ConstruirTablaRefacciones.php" + "\nURL Variables: " + "Nada");
        //console.log("ModoFiltro: " + ModoFiltro);
        xmlhttp.send();
        return;
    }
}