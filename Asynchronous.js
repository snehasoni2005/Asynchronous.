//synchronous
console.log('start');
for( let i=0;i<59900; i++){}
console.log('end');
//asynchronous
console.log('start');
setTimeout(() =>{
    console.log('timeout');},2000);
    console.log('end');
//event loop and concurrency
console.log('Script start');
setTimeout(() => {
    console.log('timeout callback');},0);
    promise.resolve().then(() => {
        console.log('promise callback');
    });
        console.log('script end');
//callback and their event loop
function fetchData (callback){
    setTimeout(() =>{
        const data ={id:1,name:'sneha soni'};
   callback(data);
 },1000);
}
fetchdata((data) =>{
    console.log('data received:',data);
});

