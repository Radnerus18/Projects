// for capturing spliced text
const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum, libero iure voluptatibus, explicabo deserunt quam veritatis, sed est architecto fugiat exercitationem ad? Minima quam laborum ipsum temporibus sequi accusamus.'
// 

// const text = [Lorem]; -*for array*

// const text = document.querySelector('.para').innerHTML;

const container = document.querySelector('.container').scrollHeight;

const contents = document.querySelector('.left').scrollHeight;//left column height

// const split_point = '768px';//fixed container height
//textEnd

const lastText = document.querySelector('.para').innerText;
const x =lastText.length;

if(contents === container){
    const split =document.querySelector('.left');
    split.classList.add('column');//to change width to 50% when content reached fixed height

    const right = document.createElement('div');
    document.querySelector('.container').appendChild(right).classList.add('right','column');
    const right_para = document.createElement('p');
    document.querySelector('.right').appendChild(right_para);

    right_para.innerText = x;
    right_para.classList.add('para')
    // text.forEach(texts => {
    //     const right_para = document.createElement('p');
    //     document.querySelector('.right').appendChild(right_para);
    //     right_para.innerText = texts;
    //     right_para.classList.add('para')
    // }); 
}
// console.log(contents);
// console.log(container);
console.log(x)
