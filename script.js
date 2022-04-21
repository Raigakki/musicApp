

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('musicSearch').addEventListener('submit', function(event) {
        event.preventDefault();

        let singer = document.getElementById('singer').value;


        callItunes(singer)

    })

})

/* fetch
function callItunes(singer) {
    fetch(`https://itunes.apple.com/search?term=${singer}&country=IT&media=music`,{method:"POST"})
    
        .then((response) => {
            if(response.ok) {
                return response.json()
            }
        }).then((music) => {
            console.log(music)
            createTable(music.results)
        }).catch((error) => {
            console.log(error)
        })
}





*/

//inizio

function callItunes(singer) {
    
    $.ajax({
        url: `https://itunes.apple.com/search?term=${singer}&country=IT&media=music`,
        type : "GET",
        dataType: "json",
        

    }).done(function(data){
        console.log(data)

        createTable(data.results)
        
    }).fail(function(xhr){
        console.log(xhr.status, xhr.statusText)

    })

     
}





function createTable(musicList) {
    let tbody = '';

    for (let music of musicList) {
        tbody += `
        <tr>
            <td><img src="${music.artworkUrl100}"></td>
            <td>${music.trackName}</td>
            <td>${music.artistName}</td>
            <td><audio src="${music.previewUrl}" controls></td>
        </tr>
        `
    }

    document.getElementById('musicList').innerHTML = tbody;
}