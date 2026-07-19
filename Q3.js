function meth(){
    console.log("hell-0")
}

function meth2(){
    meth();
}

function meth3(){
    try {
        meth2();
    } catch (error) {
        console.log(error.message+ ""+ error.name)
    }
}
meth3();