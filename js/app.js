let root = document.getElementById('root')
let app = document.getElementById('app')
let spinner = document.getElementById('spinner')
let xhr = new XMLHttpRequest()
var urlName
var urlTabName = 'settings'
sendTabReq()



$('.bottom-bar-tab-name').click(function() {
  spinner.style.display = 'grid'
  $(this).addClass('active-bottom-tab')
  $(this).siblings().removeClass('active-bottom-tab')
  urlTabName = this.id
  console.log(urlTabName)
  sendTabReq()
})


function sendTabReq() {
  if (urlTabName) {
    xhr.open('GET', 'inner/' + urlTabName + '/main.html', true)
    xhr.send()
    xhr.onload = function() {
      //var res = xhr.responseText
      var tabRes = xhr.statusText;
      $('tab-content').html(tabRes)
      spinner.style.display = 'none'
    }
  }
}

function showLoginForm() {
  xhr.open('GET', '/inner/home/main.html', false)
  xhr.send()
  console.log(xhr.status);
  if (xhr.status === 200) {
    var res = xhr.responseText
    root.innerHTML = res
  }
}



$(document).on('click', '.hint-icon',function(){
  this.classList.toggle('fa-eye')
  this.classList.toggle('fa-eye-slash')
  var passwordBox = document.getElementsByClassName('password')
  passwordBox.type = 'text'
})


//small upper tab click event
$(document).on('click', '.tab-name', function() {
  spinner.style.display = 'grid'
  $(this).addClass('active-tab')
  $(this).siblings().removeClass('active-tab')
  urlName = this.id
  sendReq()
})

function sendReq() {
  xhr.open('GET', 'inner/' + urlTabName + '/tabs/' + urlName + '.html', true)
  xhr.send()

}