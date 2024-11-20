# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The time to check if the array size is less then 2 is constant. Then there are two nested loops. The outter loop discovers the size of the subarray sizes and doubles each time until the input size, n, is found. That's $logn$ iterations. The inner loop run $n/2$ times for each iteration of the outter loop. The sort function is called inside the inner loop. This initalizes the variables and positions in constatnt time. Then it goes into a while loop and compares the elements in the two subarrays to see if they're in the correct order or if they need to be rearranged. If the elements are in the right order the index is moved forward, if not the value shift in the array so the currrent element goes into the right position. The worst case would be $n/2$ iterations for the while loop and the sort function being called $n/2$ times. So, you'd have $((n/2) *(n/2) * logn)$ = $\Theta (n^2logn)$<br>

https://www.geeksforgeeks.org/in-place-merge-sort/<br>
https://www.youtube.com/watch?v=xleF7ykgcHY<br>
https://jonathan-wong.medium.com/algorithms-merge-sort-638679180288<br>


I was being dumb and realized I wasn't doubling the array size in the outer loop even tho I knew it needed to be done. 


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice

