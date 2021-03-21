var arr = [10,2,4,65,34,15,8,11];

//Maximum value in the array
var temp = 0;
for(let i=0;i<8;i++)
{
    if(arr[i]>temp)
    {
        temp = arr[i];
    }
}
console.log("Maximum Value"+" "+temp);

//Minimum value in the array
var temp1 = arr[0];
for(let i=0;i<8;i++)
{
    if(arr[i]<temp1)
    {
        temp1 = arr[i];
    }
}
console.log("Minimum Value"+" "+temp1);

//Sum of elements in array
var sum = 0;
for(let i=0;i<8;i++)
{
    sum = sum + arr[i];
}
console.log("Sum of Numbers in Array"+" "+sum);

//Searching element in array
var search = 8;
var element = 0;
for(let i=0;i<8;i++)
{
    if(search == arr[i])
    {
        element = arr[i];
        var pos = i;
        break;
    }
}
if(element!=0)
{
    console.log("Element found at position"+" "+pos);
}
else
{
    console.log("Element not found");
}
