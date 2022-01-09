for(let i=0 ; i<5 ;i++){
    // que -- agar compiler i ke value print ku nhi kar rha or agar har bar same i ke value override ho rhi hai to atleast sare me same i print ho jay
    setTimeout(i=>{console.log(`this is the value of i = ${i}`)},i*1000) 
}

    
/*

for(let i=0 ; i<5 ;i++){
    let a = i;
    // isme bi to har loop me a ke value override ho rhi hai fir kaise output shi aa rha hai
    // que is --> agar hum har loop me a ko initialize kar rhe hai to kya har loop ke bad ke value dlt nhi honi chaheye as it is local variable in every loop aur last me a undefine hona chaheye kuki jab pura loop execute ho jayga tb he setTimeout func call hoga like in the case of above example

    setTimeout(i=>{console.log(`this is the value of a = ${a}`)},5000+i*1000)

}
*/

// other question --> why we define variable in local scope and what is the use of it ?
// does local variable free the memory after execution of function