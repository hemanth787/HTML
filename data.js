
const mydata_url = "http://127.0.0.1:5500/data.json";
async function getData() {
    const response = await fetch(mydata_url);
    const {data} = await response.json();
    
    
    const { likeCount, commentCount, unique_id } = data[0];
    document.getElementById('like').textContent = likeCount;
    document.getElementById('comment').textContent = commentCount;
    document.getElementById('uniq').textContent = unique_id;
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