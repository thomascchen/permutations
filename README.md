Here's some chill (and a couple not so chill) array functions you can use if you
want.

Chill Functions:

arrayGenerator(length)
Creates a sequential array of specified length

copyArray(array, n)
Creates n clones of array

deleteAll(array toDelete)
Deletes all occurrences of specified element

deleteLeftomst(array toDelete)
Deletes leftmost occurrences of specified element

deleteRightmost(array toDelete)
Deletes rightmost occurrences of specified element

equalArrays(array1, array2)
Returns true if the given 1d or 2d arrays are identical

factorial(positiveNumber)
Does what you think it does

flatPush(array1, array2)
Combines all elements of both arrays into a new array

includes(array, element)
Isn't this supposed to be a core JS Array method? Why does it never work for me
whatevs here's my version

lastElement(array)
Returns the last element of an array

permutations(array)
Returns all possible permutations of an array, or crashes node if you get if an
array longer than, like, I don't know, 40

reverse(array)
I forgot that YavaScript already had reverse so I reimplemented it badly whoops

rotate(array, n)
Rotate array n degrees e.g. rotate([1, 2, 3], 1) === [3, 1, 2]

shuffle(array)
Randomly shuffles an arrays elements

stringify(array)
Converts all the array's elements to strings

swapElements(array, index1, index2)
Element at index1 trades places with element at index 2. Hilarity ensues.

uniq(array1)
Returns a copy of 1d or 2d array with all duplicates removed.

Less chill functions:
There is also some utterly crazy garbage hidden in here if you want to go
looking through the source -- like a function that takes a given array element
and moves it to every possible position in that array, while leaving the rest
of the elements in the same positions relative to each other. Why would you ever
want to do that? Well you could use it in a really terrible implementation of
permutation (which is also in here somewhere)

Word up ride chill waves.