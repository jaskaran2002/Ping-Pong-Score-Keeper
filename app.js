const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const reset = document.querySelector('#reset');
const selector = document.querySelector('select');

for (let i = 3; i <= 15; i++)
{
    const temp = document.createElement('option');
    temp.setAttribute('value', `${i}`);
    temp.append(`${i}`);
    selector.append(temp);
}

selector.addEventListener('change', () => {
    p1.innerText = "0";
    p2.innerText = "0";
    b1.disabled = false;
    b2.disabled =false;
    p1.style.color = "black";
    p2.style.color = "black";
});

b1.addEventListener('click' , function(e) {
    const final = parseInt(selector.value);
    const ans = parseInt(p1.innerText);
    if (ans + 1 === final)
    {
        b1.disabled = true;
        b2.disabled = true;
        p1.style.color = "rgb(110,196,124)";
        p2.style.color = "rgb(223,84,107)";
    }

    p1.innerText = `${ans+1}`;

})
b2.addEventListener('click' , function(e) {
    const final = parseInt(selector.value);
    const ans = parseInt(p2.innerText);
    if (ans + 1 === final)
    {
        b1.disabled = true;
        b2.disabled = true;
        p2.style.color = "rgb(110,196,124)";
        p1.style.color = "rgb(223,84,107)";
    }
    p2.innerText = `${ans+1}`;
})
reset.addEventListener('click' , function(e) {
    p1.innerText = "0";
    p2.innerText = "0";
    b1.disabled = false;
    b2.disabled = false;
    p1.style.color = "black";
    p2.style.color = "black";
})