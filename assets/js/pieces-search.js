// Ajax Request
function search_displays(element) {
    var query = element.value;
    //var query = document.getElementsByName("capturaquery")[0].value;
    console.log("Se busca: '" + query + "'");
    if (query != "" || query != null) {
        var requesting_url, var_url = "", base_url, filter = true;
        base_url = "admin/php-scripts/search-pieces.php";
        var_url = ("?query=" + query + "&filter=" + filter);
        requesting_url = (base_url + var_url);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //element.querySelector("tbody").innerHTML = this.responseText;
                element.innerHTML = this.responseText;
            }
        };
        xmlhttp.open("POST", requesting_url, true);
        console.log("URL: " + requesting_url + "\nURL Variables: " + var_url);
        //console.log("Modofilter: " + Modofilter);
        xmlhttp.send();
    }
    else {
        //element.querySelector("tbody").innerHTML = "";
        element.innerHTML = "";
    }
}