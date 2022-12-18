var form = document.getElementById("form");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault(); // prevent form reload
    validation()
}

function validation() {
    // check time
    var time1 = document.getElementById("time1");
    var time2 = document.getElementById("time2");
    var time3 = document.getElementById("time3");
    var time4 = document.getElementById("time4");

    if (!(time1.checked == true || (time3.checked == true && time4.value != ''))
    ) {
        alert("Time is required!")
        return false
    }

    // check payment method
    var paymentMethod = document.getElementById("paymentMethod")

    // get all input
    var finalOutput = "";

    var name = document.getElementById("name");
    var place = document.getElementById("place");

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
        finalOutput += "\n\t時間: " + time2.value;
    } else if (time3.checked) {
        finalOutput += "\n\t時間: " + time4.value + "\n\t運費: RM 3";
    }

    var totalPrice = 0;
    var categoryA = 0; // for chicken and pork
    var categoryB = 0; // for beef and prawn

    if (chickenA.checked && chickenAQ != "" && chickenAQ != 0) {
        let word = chickenA.value
        let amount = chickenAQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (chickenB.checked && chickenBQ != "" && chickenBQ != 0) {
        let word = chickenB.value
        let amount = chickenBQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (chickenC.checked && chickenCQ != "" && chickenCQ != 0) {
        let word = chickenC.value
        let amount = chickenCQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (porkA.checked && porkAQ.value != "" && porkAQ.value != 0) {
        let word = porkA.value
        let amount = porkAQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (porkB.checked && porkBQ.value != "" && porkBQ.value != 0) {
        let word = porkB.value
        let amount = porkBQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (porkC.checked && porkCQ.value != "" && porkCQ.value != 0) {
        let word = porkC.value
        let amount = porkCQ.value

        categoryA += amount * 1.0;

        if (categoryA < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryA >= 10) {
            let count = categoryA;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryA -= price * 10;
            price *= 15

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (categoryA < 10 && categoryA != 0) {
        categoryA *= 1.7
        totalPrice += categoryA;
        finalOutput += "\n\t\t\t" + categoryA
    }

    if (beefA.checked && beefAQ.value != "" && beefAQ.value != 0) {
        let word = beefA.value
        let amount = beefAQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (beefB.checked && beefBQ.value != "" && beefBQ.value != 0) {
        let word = beefB.value
        let amount = beefBQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (beefC.checked && beefCQ.value != "" && beefCQ.value != 0) {
        let word = beefC.value
        let amount = beefCQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (prawnA.checked && prawnAQ.value != "" && prawnAQ.value != 0) {
        let word = prawnA.value
        let amount = prawnAQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (prawnB.checked && prawnBQ.value != "" && prawnBQ.value != 0) {
        let word = prawnB.value
        let amount = prawnBQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }
    if (prawnC.checked && prawnCQ.value != "" && prawnCQ.value != 0
    ) {
        let word = prawnC.value
        let amount = prawnCQ.value

        categoryB += amount * 1.0;

        if (categoryB < 10) {
            finalOutput += "\n\t\t" + word + "x" + amount
        } else if (categoryB >= 10) {
            let count = categoryB;
            let price = 0

            if (count >= 10) {
                while (count != 0) {
                    price = count;
                    count = Math.floor(count / 10);
                }
            }

            categoryB -= price * 10;
            price *= 18

            finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price

            totalPrice += price;
        }
    }

    if (categoryB < 10 && categoryB != 0) {
        categoryB *= 2
        totalPrice += categoryB;
        finalOutput += "\n\t\t\t" + categoryB
    }

    if (scallopA.checked && scallopAQ.value != "" && scallopAQ.value != 0
    ) {
        let word = scallopA.value
        let amount = scallopAQ.value
        let count = amount
        let discount = 0

        if (count >= 10) {
            while (count != 0) {
                discount = count;
                count = Math.floor(count / 10);
                discount *= 1;
            }
        }

        let price = amount * 1.4 - discount;
        totalPrice += price;

        finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price;
    }
    if (scallopB.checked && scallopBQ.value != "" && scallopBQ.value != 0
    ) {
        let word = scallopA.value
        let amount = scallopAQ.value
        let count = amount
        let discount = 0

        if (count >= 10) {
            while (count != 0) {
                discount = amount;
                amount = Math.floor(amount / 10);
                discount *= 1;
            }
        }

        let price = amount * 1.4 - discount;
        totalPrice += price;

        finalOutput += "\n\t\t" + word + "x" + amount + "\t" + price;
    }

    if (solenStrictusA.checked && solenStrictusAQ.value != "" && solenStrictusAQ.value != 0
    ) {
        let price = solenStrictusAQ.value * 8
        totalPrice += price;

        finalOutput += "\n\t\t" + solenStrictusA.value + "x" + solenStrictusAQ.value + "\t" + price;
    }
    if (solenStrictusB.checked && solenStrictusBQ.value != "" && solenStrictusBQ.value != 0
    ) {
        let price = solenStrictusBQ.value * 8
        totalPrice += price;

        finalOutput += "\n\t\t" + solenStrictusB.value + "x" + solenStrictusBQ.value + "\t" + price;
    }

    if (oysterA.checked && oysterAQ.value != "" && oysterAQ.value != 0
    ) {
        let price = Math.ceil(oysterAQ.value * 13.33)
        totalPrice += price;

        finalOutput += "\n\t\t" + oysterA.value + "x" + oysterAQ.value + "\t" + price;
    }

    if (greenTB.checked && greenTBQ.value != "" && greenTBQ.value != 0
    ) {
        let price = greenTBQ.value * 7
        totalPrice += price;

        finalOutput += "\n\t\t" + greenTB.value + "x" + greenTBQ.value + "\t" + price;
    }

    if (greenTS.checked && greenTSQ.value != "" && greenTSQ.value != 0
    ) {
        let price = greenTSQ.value * 5
        totalPrice += price;

        finalOutput += "\n\t\t" + greenTS.value + "x" + greenTSQ.value + "\t" + price;
    }

    if (redTB.checked && redTBQ.value != "" && redTBQ.value != 0) {
        let price = redTBQ.value * 7
        totalPrice += price;

        finalOutput += "\n\t\t" + redTB.value + "x" + redTBQ.value + "\t" + price;
    }

    if (redTS.checked && redTSQ.value != "" && redTSQ.value != 0) {
        let price = redTSQ.value * 5
        totalPrice += price;

        finalOutput += "\n\t\t" + redTS.value + "x" + redTSQ.value + "\t" + price;
    }

    if (time3.value != '') {
        totalPrice += 3;
    }

    finalOutput += "\n\t\t\tRM " + parseFloat(totalPrice).toFixed(2);

    finalOutput += "\t" + paymentMethod.value;

    copy(finalOutput)
}

function copy(finalOutput) {
    document.getElementById("text").value = finalOutput;
    document.getElementById("text").style.display = "";
    document.getElementById("text").select();
    document.execCommand("copy");
    document.getElementById("text").style.display = "none";
}

function disableTextField() {
    document.getElementById('time4').disabled = true
}

function enableTextField() {
    document.getElementById('time4').disabled = false
}
