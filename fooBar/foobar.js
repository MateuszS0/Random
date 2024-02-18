// for each 3 say foo for 5 say bar and for multiplication of them say FooBar


const foobar = () => {
    for (let i = 1; i <100; i++) {
        if(i%15==0) {
            console.log("FooBar");
        } else if (i%5==0) {
            console.log("Bar");
        } else if (i%3==0) {
            console.log("Foo");
            
        }else {
            console.log(i);
            
        }
    }
}
foobar();