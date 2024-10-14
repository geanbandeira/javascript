//evita repetição de funções 
function debounce(fn, delay){
  let timeout;
  clearTimeout(timeout);
  timeout = setTimeout(() => fn(args...), delay);
};
}

const handleInput = debounce((e) =>{
  console.log(e.target.value);
}, 300);

document.querySelector('input').addEventListener('input', handleInput);
