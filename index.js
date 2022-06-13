const main = document.getElementById('button');

function addingEventListener(){
  main.addEventListener('click', function() {
    alert('I was clicked!');
    return "clicked"
  })
}