## Getting Started


First, run the unittest with jest:

install jest to your node package
```bash
npm install jest --save-dev
```

```bash
npm run test
```



## Coding Algorithm Questions

**Problem 1: Boss Baby's Revenge**

**Description:**
Boss Baby, known for his cool and clever ways, deals with teasing from the neighborhood kids who shoot
water guns at his house. In response, Boss Baby seeks revenge by shooting at least one shot back, but only
if the kids have already shot at him first. As Boss Baby's assistant, your task is to check if Boss Baby has
sought revenge for every shot aimed at him at least once and hasn't initiated any shooting himself.

**Input:**
A string (S, 1 <= len(S) <= 1,000,000) containing characters 'S' and 'R', where 'S' represents a shot and 'R'
represents revenge. The string represents the sequence of events for one day.

**Output:**
Return "Good boy" if all shots have been revenged at least once and Boss Baby doesn’t initiate any shots at
the neighborhood kids first. Return "Bad boy" if these conditions are not satisfied.

**Note:**
- Boss Baby doesn’t need to shoot back before the next shots of the kids. He can shoot back whenever
he wants as long as he doesn’t shoot first.

**Example case :** 

For the situation "SRSSRRR" should return "Good boy"

For the situation "RSSRR" should return "Good boy"

**Explanation**:
- In the first example, the first shot “S” has been avenged by the second action. The next two shots “SS” have
been avenged by the following retaliation shots “RRR”.
- In the second example, the first action is revenge “R”, which makes Boss Baby a bad boy as he shouldn’t
shoot first.


**Problem 2: Superman's Chicken Rescue**

**Description:**
In a one-dimensional world, Superman needs to protect chickens from a heavy rainstorm using a roof of limited
length. Given the positions of chickens and the length of the roof Superman can carry, determine the maximum
number of chickens Superman can protect.

**Input:**
The input consists of two integers n and k (1 <= n,k <= 1,000,000), where n represents the number of chickens
and k denotes the length of the roof Superman can carry. The next line contains n integers (1 <= x <=
1,000,000,000) representing the positions of the chickens on the one-dimensional axis.

**Output:**
Output a single integer, denoting the maximum number of chickens Superman can protect with the given roof
length.

**Note:**
- Superman can position the roof starting at any point on the axis.
- The roof can cover chickens whose positions are within k units from its starting point. [p, p+k)
- It's not required to cover all chickens, but to maximize the number of chickens protected.
- It’s guaranteed that the given positions of the chickens will be sorted from lowest to highest.


**Example case :** 

Input => 5 5
2 5 10 12 15

output => 2

Input => 6 10
1 11 30 34 35 37

output => 4

**Explanation:**
In the first example, superman can position the roof starting at position 2 (roof at 2 - 6), covering chickens at
positions 2 and 5. Thus, he can protect a maximum of 2 chickens.
In the second example, superman can position the roof starting at position 30 (roof at 30 - 39), covering
chickens at positions 30, 34, 35, and 37. Thus, he can protect a maximum of 4 chickens.




  
