
const mydata_url = "http://127.0.0.1:5501/data.json";
async function getData() {
    const response = await fetch(mydata_url);
    const {data} = await response.json();
    
    
    const { likeCount, commentCount, unique_id, image_url } = data[0];
    document.getElementById('like').textContent = likeCount;
    document.getElementById('comment').textContent = commentCount;
    document.getElementById('uniq').textContent = unique_id;
    document.getElementById('img-prof').src = image_url;
    // var img = document.createElement('img');
    // img.src = "https://instagram.fhyd3-1.fna.fbcdn.net/v/t51.2885-15/s150x150/137032188_448911142974894_661426439725833092_n.jpg?tp=1&_nc_ht=instagram.fhyd3-1.fna.fbcdn.net&_nc_ohc=IJvBuqpKcE8AX_bO40A&edm=AGW0Xe4BAAAA&ccb=7-4&oh=636ee27e5d1731b73f480dfbd0f0935a&oe=60D28C99&_nc_sid=acd11b"
    // document.getElementById('img-prof').appendChild('img');

//  document.getElementById("img-prof").src="image_url";
//    document.getElementById('img-prof').src = image_url;
   
    console.log(data);
}
getData();

// const firstObj = data[0];
    // console.log("firstObj",firstObj);

    // const {} = firstObj;

    // const singleObj = data.map((obj)=>{
    //     console.log("obj...")
    //     return obj;
    // });
    // const firstObject = singleObj[0];
    // console.log("singleObj....",firstObject);

    
    
    
    
    
    
    
    
    // async function getSampleData(){
    //     const api_url = "https://dummy.restapiexample.com/api/v1/employees";
    
    //     const response = await fetch(api_url);
    //     const barChartData = await response
    // }