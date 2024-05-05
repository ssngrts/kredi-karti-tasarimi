document.querySelector(".number-input").oninput= () =>{
    document.querySelector(".card-number").innerText=
     document.querySelector(".number-input").value;
};

document.querySelector(".holder-input").oninput= () =>{
    document.querySelector(".holder-name").innerText=
     document.querySelector(".holder-input").value;
};

document.querySelector(".month-input").oninput= () =>{
    document.querySelector(".time-month").innerText=
     document.querySelector(".month-input").value + " / ";
};

document.querySelector(".year-input").oninput= () =>{
    document.querySelector(".time-year").innerText=
     document.querySelector(".year-input").value;
};

document.querySelector(".year-input").oninput= () =>{
    document.querySelector(".time-year").innerText=
     document.querySelector(".year-input").value;
};

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}
