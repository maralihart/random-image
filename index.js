var animalB = $("#animal")
var foodB = $("#food")
var image = $("#image")

animalB.click(generateImage)
foodB.click(generateImage)

function generateImage() {
    var aOrF = this.id;
    console.log(aOrF)
    var randomDecimal = Math.random() * 7 // I have 7 photos
    var randomNumber = Math.floor(randomDecimal) // rounds down my decimal to integer
    randomNumber ++ // add one to my number so it goes from 1-7 instead of 0-6

    var imgName = randomNumber + ".jpeg" // added .jpeg bc that's the file type
    console.log(imgName)

    var imgSRC = "./assets/" + aOrF + "/" + imgName;
    console.log(image.src)

    image.empty()
    image.append(`<img src=${imgSRC}>`)
}