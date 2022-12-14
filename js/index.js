function copy() {
    var finalOutput = "";

    var name = document.getElementById("name");
    var place = document.getElementById("place");

    var time = false
    var time1 = document.getElementById("time1");
    var time2 = document.getElementById("time2");
    var time3 = document.getElementById("time3");
    var time4 = document.getElementById("time4");
    var time5 = document.getElementById("time5");
    var time6 = document.getElementById("time6");

    if (time1.checked == true ||
        time2.checked == true ||
        time3.checked == true ||
        time4.checked == true ||
        (time5.checked == true && time6.value != "")
    ) {
        time = true
    } else {
        time = false
    }

    if (name.value == "" ||
        place.value == "" ||
        time == false
    ) {
        if (name.value == "") {
            alert("Name is required!")
        } else if (place.value == "") {
            alert("Destination is required!")
        } else {
            alert("Time is required!")
        }
    } else {
        var chickenA = document.getElementById("chickenA");
        var chickenAQ = document.getElementById("chickenAQ");
        var chickenB = document.getElementById("chickenB");
        var chickenBQ = document.getElementById("chickenBQ");
        var chickenC = document.getElementById("chickenC");
        var chickenCQ = document.getElementById("chickenCQ");

        var porkA = document.getElementById("porkA");
        var porkAQ = document.getElementById("porkAQ");
        var porkB = document.getElementById("porkB");
        var porkBQ = document.getElementById("porkBQ");
        var porkC = document.getElementById("porkC");
        var porkCQ = document.getElementById("porkCQ");

        var beefA = document.getElementById("beefA");
        var beefAQ = document.getElementById("beefAQ");
        var beefB = document.getElementById("beefB");
        var beefBQ = document.getElementById("beefBQ");
        var beefC = document.getElementById("beefC");
        var beefCQ = document.getElementById("beefCQ");

        var prawnA = document.getElementById("prawnA");
        var prawnAQ = document.getElementById("prawnAQ");
        var prawnB = document.getElementById("prawnB");
        var prawnBQ = document.getElementById("prawnBQ");
        var prawnC = document.getElementById("prawnC");
        var prawnCQ = document.getElementById("prawnCQ");

        var scallopA = document.getElementById("scallopA");
        var scallopAQ = document.getElementById("scallopAQ");
        var scallopB = document.getElementById("scallopB");
        var scallopBQ = document.getElementById("scallopBQ");

        var solenStrictusA = document.getElementById("solenStrictusA");
        var solenStrictusAQ =
            document.getElementById("solenStrictusAQ");
        var solenStrictusB = document.getElementById("solenStrictusB");
        var solenStrictusBQ =
            document.getElementById("solenStrictusBQ");

        var oysterA = document.getElementById("oysterA");
        var oysterAQ = document.getElementById("oysterAQ");

        var greenTB = document.getElementById("greenTB");
        var greenTBQ = document.getElementById("greenTBQ");
        var greenTS = document.getElementById("greenTS");
        var greenTSQ = document.getElementById("greenTSQ");

        var redTB = document.getElementById("redTB");
        var redTBQ = document.getElementById("redTBQ");
        var redTS = document.getElementById("redTS");
        var redTSQ = document.getElementById("redTSQ");

        finalOutput +=
            "訂單者: " + name.value + "\n\t地點: " + place.value;

        if (time1.checked) {
            finalOutput += "\n\t時間: " + time1.value;
        } else if (time2.checked) {
            finalOutput += "\n\t時間: " + time2.value;
        } else if (time3.checked) {
            finalOutput += "\n\t時間: " + time3.value;
        } else if (time4.checked) {
            finalOutput += "\n\t時間: " + time4.value;
        } else if (time5.checked) {
            finalOutput += "\n\t時間: " + time6.value;
        }

        finalOutput += "\n";

        var setDiscount = 0;
        var amount = 0;
        var quantity = 0;
        var totalAmount = 0;

        if (chickenA.checked && chickenAQ != "" && chickenAQ != 0) {
            amount = chickenAQ.value;
            quantity = chickenAQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                chickenA.value +
                "x" +
                chickenAQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (chickenB.checked && chickenBQ != "" && chickenBQ != 0) {
            amount = chickenBQ.value;
            quantity = chickenBQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                chickenB.value +
                "x" +
                chickenBQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (chickenC.checked && chickenCQ != "" && chickenCQ != 0) {
            amount = chickenCQ.value;
            quantity = chickenCQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                chickenC.value +
                "x" +
                chickenCQ.value +
                "\t" +
                quantity +
                "\n";
        }

        if (porkA.checked && porkAQ.value != "" && porkAQ.value != 0) {
            amount = porkAQ.value;
            quantity = porkAQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                porkA.value +
                "x" +
                porkAQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (porkB.checked && porkBQ.value != "" && porkBQ.value != 0) {
            amount = porkBQ.value;
            quantity = porkBQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                porkB.value +
                "x" +
                porkBQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (porkC.checked && porkCQ.value != "" && porkCQ.value != 0) {
            amount = porkCQ.value;
            quantity = porkCQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.7 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                porkC.value +
                "x" +
                porkCQ.value +
                "\t" +
                quantity +
                "\n";
        }

        if (beefA.checked && beefAQ.value != "" && beefAQ.value != 0) {
            amount = beefAQ.value;
            quantity = beefAQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                beefA.value +
                "x" +
                beefAQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (beefB.checked && beefBQ.value != "" && beefBQ.value != 0) {
            amount = beefBQ.value;
            quantity = beefBQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                beefB.value +
                "x" +
                beefBQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (beefC.checked && beefCQ.value != "" && beefCQ.value != 0) {
            amount = beefCQ.value;
            quantity = beefCQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                beefC.value +
                "x" +
                beefCQ.value +
                "\t" +
                quantity +
                "\n";
        }

        if (
            prawnA.checked &&
            prawnAQ.value != "" &&
            prawnAQ.value != 0
        ) {
            amount = prawnAQ.value;
            quantity = prawnAQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                prawnA.value +
                "x" +
                prawnAQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (
            prawnB.checked &&
            prawnBQ.value != "" &&
            prawnBQ.value != 0
        ) {
            amount = prawnBQ.value;
            quantity = prawnBQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                prawnB.value +
                "x" +
                prawnBQ.value +
                "\t" +
                quantity +
                "\n";
        }
        if (
            prawnC.checked &&
            prawnCQ.value != "" &&
            prawnCQ.value != 0
        ) {
            amount = prawnCQ.value;
            quantity = prawnCQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 2;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 2.0 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                prawnC.value +
                "x" +
                prawnCQ.value +
                "\t" +
                quantity +
                "\n";
        }

        if (
            scallopA.checked &&
            scallopAQ.value != "" &&
            scallopAQ.value != 0
        ) {
            amount = scallopAQ.value;
            quantity = scallopAQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 1;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.4 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + scallopA.value + "x" + scallopAQ.value + "\t" +
                quantity + "\n";
        }
        if (
            scallopB.checked &&
            scallopBQ.value != "" &&
            scallopBQ.value != 0
        ) {
            amount = scallopBQ.value;
            quantity = scallopBQ.value;

            if (amount >= 10) {
                while (amount != 0) {
                    setDiscount = amount;
                    amount = Math.floor(amount / 10);
                    setDiscount *= 1;
                }
            } else {
                setDiscount = 0
            }

            quantity = quantity * 1.4 - setDiscount;
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + scallopB.value + "x" + scallopBQ.value + "\t" +
                quantity + "\n";
        }

        if (
            solenStrictusA.checked &&
            solenStrictusAQ.value != "" &&
            solenStrictusAQ.value != 0
        ) {
            quantity = solenStrictusAQ.value * 8
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                solenStrictusA.value +
                "x" +
                solenStrictusAQ.value + "\t" +
                quantity
                + "\n";
        }
        if (
            solenStrictusB.checked &&
            solenStrictusBQ.value != "" &&
            solenStrictusBQ.value != 0
        ) {
            quantity = solenStrictusBQ.value * 8
            totalAmount += quantity;

            finalOutput +=
                "\t\t" +
                solenStrictusB.value +
                "x" +
                solenStrictusBQ.value + "\t" +
                quantity
                + "\n";
        }

        if (
            oysterA.checked &&
            oysterAQ.value != "" &&
            oysterAQ.value != 0
        ) {
            quantity = Math.ceil(oysterAQ.value * 13.33)
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + oysterA.value + "x" + oysterAQ.value + "\t" +
                quantity + "\n";
        }

        if (
            greenTB.checked &&
            greenTBQ.value != "" &&
            greenTBQ.value != 0
        ) {
            quantity = greenTBQ.value * 7
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + greenTB.value + "x" + greenTBQ.value + "\t" +
                quantity + "\n";
        }

        if (
            greenTS.checked &&
            greenTSQ.value != "" &&
            greenTSQ.value != 0
        ) {
            quantity = greenTSQ.value * 5
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + greenTS.value + "x" + greenTSQ.value + "\t" +
                quantity + "\n";
        }

        if (redTB.checked && redTBQ.value != "" && redTBQ.value != 0) {
            quantity = redTBQ.value * 7
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + redTB.value + "x" + redTBQ.value + "\t" +
                quantity + "\n";
        }

        if (redTS.checked && redTSQ.value != "" && redTSQ.value != 0) {
            quantity = redTSQ.value * 5
            totalAmount += quantity;

            finalOutput +=
                "\t\t" + redTS.value + "x" + redTSQ.value + "\t" +
                quantity + "\n";
        }

        finalOutput += "\t\t\tRM " + totalAmount;

        document.getElementById("text").value = finalOutput;
        document.getElementById("text").style.display = "";
        document.getElementById("text").select();
        document.execCommand("copy");
        document.getElementById("text").style.display = "none";
    }
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("place").value = "";

    document.getElementById("time1").checked = false;
    document.getElementById("time2").checked = false;
    document.getElementById("time3").checked = false;
    document.getElementById("time4").checked = false;
    document.getElementById("time5").checked = false;
    document.getElementById("time6").value = "";

    document.getElementById("chickenA").checked = false;
    document.getElementById("chickenAQ").value = "";
    document.getElementById("chickenB").checked = false;
    document.getElementById("chickenBQ").value = "";
    document.getElementById("chickenC").checked = false;
    document.getElementById("chickenCQ").value = "";

    document.getElementById("porkA").checked = false;
    document.getElementById("porkAQ").value = "";
    document.getElementById("porkB").checked = false;
    document.getElementById("porkBQ").value = "";
    document.getElementById("porkC").checked = false;
    document.getElementById("porkCQ").value = "";

    document.getElementById("beefA").checked = false;
    document.getElementById("beefAQ").value = "";
    document.getElementById("beefB").checked = false;
    document.getElementById("beefBQ").value = "";
    document.getElementById("beefC").checked = false;
    document.getElementById("beefCQ").value = "";

    document.getElementById("prawnA").checked = false;
    document.getElementById("prawnAQ").value = "";
    document.getElementById("prawnB").checked = false;
    document.getElementById("prawnBQ").value = "";
    document.getElementById("prawnC").checked = false;
    document.getElementById("prawnCQ").value = "";

    document.getElementById("scallopA").checked = false;
    document.getElementById("scallopAQ").value = "";
    document.getElementById("scallopB").checked = false;
    document.getElementById("scallopBQ").value = "";

    document.getElementById("solenStrictusA").checked = false;
    document.getElementById("solenStrictusAQ").value = "";
    document.getElementById("solenStrictusB").checked = false;
    document.getElementById("solenStrictusBQ").value = "";

    document.getElementById("oysterA").checked = false;
    document.getElementById("oysterAQ").value = "";

    document.getElementById("greenTB").checked = false;
    document.getElementById("greenTBQ").value = "";
    document.getElementById("greenTS").checked = false;
    document.getElementById("greenTSQ").value = "";

    document.getElementById("redTB").checked = false;
    document.getElementById("redTBQ").value = "";
    document.getElementById("redTS").checked = false;
    document.getElementById("redTSQ").value = "";
}

function disableTextField() {
    document.getElementById('time6').disabled= true
}

function enableTextField() {
    document.getElementById('time6').disabled= false
}
