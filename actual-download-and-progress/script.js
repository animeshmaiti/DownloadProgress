var download = document.querySelector('#download')
var percent = document.querySelector('#percent')
var cancel = document.querySelector('#cancel')
var progressBar = document.querySelector('.progress-bar')
var dataTrnsfered = document.querySelector('#dataTrnsfered')
var kbps = document.querySelector('#kbps')
var timeleft = document.querySelector('#timeleft')

download.onclick = () => {
    var xhr = new XMLHttpRequest();
    //to cancel at any time
    cancel.onclick = () => xhr.abort();
    //beofre request you can use preloader here
    percent.innerHTML = 'Dowloading...'
    progressBar.style.width = '0%'
    // var startTime = new Date().getTime()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //return file as blob here
                console.log(xhr.response);
                // var a = document.createElement('a')
                // a.href = window.URL.createObjectURL(xhr.response)
                // a.download = ''
                // a.click()
            } else {
                console.log('Error! Try again');
            }
        }
    }
    xhr.onprogress = (e) => {
        //get progress here
        console.log(e);
        // var percent_complete = (e.loaded / e.total) * 100
        // var mbTotal = Math.floor(e.total / (1024 * 1024))
        // var mbLoaded = Math.floor(e.loaded / (1024 * 1024))

        // var time = (new Date().getTime() - startTime) / 1000
        // var bps = e.loaded / time
        // var kbps = Math.floor(bps / 1024)

        // var remTime = (e.total - e.loaded) / bps
        // var seconds = Math.floor(remTime % 60)
        // var minutes = Math.floor(remTime / 60)

        // //give output
        // dataTrnsfered.innerHTML = `${mbLoaded}/${mbTotal} Mb`
        // kbps.innerHTML = `${kbps} Kbps`
        // timeleft.innerHTML = `${minutes}:${seconds}s`
        // percent.innerHTML = `${Math.floor(percent_complete)} %`
        // progressBar.style.width = percent_complete + '%'
    }
    //for cancel function
    xhr.onabort = () => {
        percent.innerHTML = 'Cenceled'
        progressBar.style.width = '0%'
    }
    xhr.responseType = 'blob'
    xhr.open("POST", "outro.mp4", true)
    xhr.send()
}