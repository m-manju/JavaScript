let xhr = new XMLHttpRequest();
xhr.open("get","https://jsonplaceholder.typicode.com/users")
xhr.send();


xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        if(xhr.status == 200){
            var results = JSON.parse(xhr.responseText);
            var html_content = "";
            for(i=0; i<results.length; i++){
                var current_result = results[i];
                html_content = html_content + "<tr><td>"+current_result.id+"</td> <td>"+current_result.name+"</td> <td>"+current_result.username+"</td> <td>"+current_result.email+"</td> </tr>";
            }
            document.getElementById("results").innerHTML =html_content;
        }
    }
}