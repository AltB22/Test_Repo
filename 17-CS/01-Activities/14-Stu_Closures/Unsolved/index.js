// TODO: Complete the 'counter' function below.
function counter() {
    let add = 0;
    return {
        increment: function(){
            
            return ++add
        }
    }
}

module.exports = counter;
