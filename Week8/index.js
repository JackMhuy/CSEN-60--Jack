//this code runs synchronously 
function showData() {
    console.log("show data function finish")
}
async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    const data = await response.json()
    console.log(data.text)
    //console.log("getData finish")
}
//get random fact
async function getTodayFact(params) {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    const data = await response.json()
    console.log(data.text)
    //console.log("getData finish")

}

getRandomFact()
getTodayFact()
//getData()
//showData()
