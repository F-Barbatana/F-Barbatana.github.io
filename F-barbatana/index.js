function Dado_base(tipo) {


}


function valor_dado(val) {
    switch (val) {
        case 10:
            return Math.random().toFixed(1) * 10
            break;
        case 20:
            return Math.random().toFixed(2) * 100
            break;


    }
    return
}

function getRandomColorhex() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        let test = Math.random() * 16;
        color += letters[Math.floor(test)];
    }
    console.log(color);
    return color;
}

var count = 0

function getRandomColorRGBA() {
    var letters = '0123456789';
    var color = 'rgba(';
    for (let j = 0; j < 3; j++) {
        let sub = ""
        for (let i = 0; i < 3; i++) {
            let test = Math.random() * 10;

            sub += letters[Math.floor(test)];
        }

        if (parseInt(sub) <= 255) {
            color += sub;
            color += ",";
        } else {
            j--;
        }


    }

    color += parseFloat(Math.random().toFixed(1));

    color += ")"
    console.log(color);
    return color;
}

function converter_HEX_to_RGB(valor_cor) {

    let converter = "rgb("
    let sub = Array()
    for (let i = 0; i < 7; i++) {
        if (valor_cor[i] != "#") {
            switch (valor_cor[i]) {
                case "A":
                    sub.push(10);
                    break;
                case "B":
                    sub.push(11);
                    break;
                case "C":
                    sub.push(12);
                    break;
                case "D":
                    sub.push(13);
                    break;
                case "E":
                    sub.push(14);
                    break;
                case "F":
                    sub.push(15);
                    break;
                case "a":
                    sub.push(10);
                    break;
                case "b":
                    sub.push(11);
                    break;
                case "c":
                    sub.push(12);
                    break;
                case "d":
                    sub.push(13);
                    break;
                case "e":
                    sub.push(14);
                    break;
                case "f":
                    sub.push(15);
                    break;
                default:
                    sub.push(parseInt(valor_cor[i]));
                    break;
            }

        }
    }
    console.log(sub);


    for (let j = 0; j < 6; j += 2) {

        //console.log(sub[j]);
        let calculo = sub[j + 1] + sub[j] * 16;
        //console.log(calculo);
        converter += calculo;
        if (j != 4) {
            console.log(j);
            converter += ",";
        }
    }
    converter += ")";
    console.log(converter);
    return converter;
}




function batata() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log("test");
        }


    }
}


$(document).ready(function() {


    batata();
    $('.parallax').parallax();


    $("#ger_cor_X").click(function() {
        $("#result_color_X").text("");
        $("#Cor_fin_X").removeClass("scale-out")
        let cor = getRandomColorhex();
        let rgb = converter_HEX_to_RGB(cor);
        $("#Cor_fin_X").css("background-color", cor);
        $("#result_color_X").append(cor + "<br>" + rgb);
    });




    $("#ger_cor_R").click(function() {
        $("#Cor_fin_R").removeClass("scale-out")
        let cor = getRandomColorRGBA();
        $("#Cor_fin_R").css("background-color", cor);
        $("#result_color_R").text(cor);

    });


    $("#converter").click(function() {
        console.log($("#conv_value").val());

        let cor = converter_HEX_to_RGB($("#conv_value").val());
        console.log(cor);
        $("#conv-result").text(cor);
    });

    $("#ger_cor_R").removeClass("scale-out");
    $("#ger_cor_X").removeClass("scale-out")
    $("#conhecimento").removeClass("scale-out");

    $('.materialboxed').materialbox();
    console.log(valor_dado(20));
});