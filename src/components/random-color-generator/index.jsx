

export default function RandomColor(){
    function generateRanColor(){
        let color = ["red", "green", "blue", "orange", "white", "pink"];
        const bColor = color[Math.floor(Math.random(color) * color.length)];
        document.body.style.backgroundColor = bColor;
        document.getElementById("color").innerHTML= bColor;
        // console.log("Color: ",bColor);
    }
    function generateRanHexColor() {
        let hexColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        let hcolor = "#";
        for(let i=0; i<6; i++){
            hcolor += hexColor[Math.floor(Math.random(hexColor)* hexColor.length)]
        }
        document.body.style.backgroundColor = hcolor;
        document.getElementById("color").innerHTML = hcolor;
        // console.log(hcolor)
    }
    function generateRanRGBcolor(){
        let rgbColor1 = Math.floor(Math.random()*255);
        let rgbColor2 = Math.floor(Math.random()*255);
        let rgbColor3 = Math.floor(Math.random()*255);
        const bodyStyle=  document.body.style.backgroundColor = `rgb(${rgbColor1},${rgbColor2},${rgbColor3})`;
        document.getElementById("color").innerHTML = bodyStyle;
        // console.log(rgbColor1);
        // console.log(rgbColor2);
        // console.log(rgbColor3);
    }
    return <div>
        <h1>Random Color Generator</h1>
        <button onClick={ ()=> generateRanColor()}>Generate Random Colour</button>
        {/* <button onClick={ generateRanColor}>Generate Random Color</button> */}
        <button onClick={ ()=> generateRanHexColor()}>Generate Random HEX Color</button>
        <button onClick={()=> generateRanRGBcolor()}>Generate Random rgb Colour</button>
        <h2 id="color">colour</h2>
    </div>
}