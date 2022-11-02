let base_url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles='
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const info = document.querySelector('.info')
const title = document.querySelector('.title')
const welcome = document.querySelector('.welcome')
const par_info = document.querySelector('.par_info')
input.addEventListener('keypress', func)
btn.addEventListener('click', btnFunc)

function func(e) {
    if (e.keyCode == 13) {
        btnFunc()
        console.log(e.keyCode);
    }
}

function btnFunc(){
    let word = input.value
    fetch(`${base_url}${word}`)
    .then(a => a.json())
    .then(b => {
        b = b.query.pages
        let pageId = Object.keys(b)[0]
        let extract = b[pageId].extract
        console.log(b);
        title.innerText = 'Result for ' + `"${word}"`
        info.innerText = extract
        welcome.innerText = ''
        par_info.innerText = ''
        if(b[-1].ns === 0){
            title.innerText = 'No results'
            info.innerText = ''
        }
    })

}