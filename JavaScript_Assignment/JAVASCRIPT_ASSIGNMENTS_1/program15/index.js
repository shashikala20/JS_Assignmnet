function bubbleSort(array)
{
    const arr = array.slice();
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
        if(arr[j] > arr[j+1]){
           [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
        }
     } 
    }
    return arr;
}  

//Merge sort 
function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m; 
	var L = new Array(n1);
	var R = new Array(n2); 
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j]; 
	var i = 0; 
	var j = 0; 
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}
 
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}
 
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	} 
}
 
function mergeSort(arr,l, r){
	if(l>=r){
		return; 
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r); 

    return arr;
}
  
function printArray( A, size)
{
    for (var i = 0; i < size; i++)
       document.write(  A[i] + " ");
}
  

const arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
document.write("Array Before Bubble Sort: " + arr +"</br></br>");
document.write("Array After Bubble Sort: " + bubbleSort(arr)); 
document.write("<br><br> Array After Merge Sort: " + mergeSort(arr, 0, arr.length - 1)); 
