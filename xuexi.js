var name = 'xx'
function a(){
    var name = 'aa'
    function b(){
        console.log(this.name)
    }
    b();
}
