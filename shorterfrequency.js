function shortfrequency(list) {
    // Here is a shorter code for getting the frequency of each element in an array. We use the function ...new Set function to get all the distinct elements in the array and assign it to the listuniq array. Then we nest a while condition inside a for loop, comparing each element of the arrays, and when it detects an equality we increment a counter, and increment j by 1 at each iteration. We then push the elements in the array arr, this must be done outside the while loop for our desired output of elements. Now we have the final array arr which consists of two objects. The first element is the number and the second element is the frequency.
    let listuniq = [...new Set(list)];
    arr = []
    for(i=0; i<=listuniq.length-1; i++){
      let counter = 0
      let j = 0
      while(j<=list.length-1){
            if(listuniq[i] == list[j]){
            counter++
            //   console.log(listuniq[i], list[j], counter) 
            }
            j++
        }
    //   console.log('========')
    //   console.log(`${listuniq[i]}, ${counter}`)
      arr.push([listuniq[i], counter])
    }
    console.log(arr)

    for(i=0; i<=arr.length-1; i++){
        console.log(`${arr[i][0]}'s frequency: ${arr[i][1]}`)
    }
  }
  shortfrequency([1, 3, 5, 9, 11, 1])
  console.log('========')
  shortfrequency([1,2,2,3,3,3,51,4,3,3,3,2,2,1])