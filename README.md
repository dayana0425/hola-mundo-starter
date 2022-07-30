# Lesson 9 - Gas limit in loops

Experiment on gas limit with line-by-line comments. 

The objective of this experiment was to understand what happens when gas limit is exceeded during a transaction & how to bypass that limit. 

It taught me to be careful with loops inside of smart contracts and that the ethereum blockchain does not offer unlimited computation. 

A single block can only handle about 30 billion units of gas. Ethereum cannot process anything that costs more than one block. 

Now, it is not recommended to program a smart contract that uses a block size of gas but if I ever needed to, I know how! 

## Gas limit and loops
* Block, block size and gas
* Gas limit network variable
* Transaction stack
* Optimization patterns
* O(n) versus N*O(1)

### References
https://dl.acm.org/doi/10.1145/3324884.3416626

https://blog.b9lab.com/getting-loopy-with-solidity-1d51794622ad

## Gas limit and loops
* Converting strings to bytes
* Comparing strings
* Dealing with bytes arrays
* Loop syntaxes
* Hitting gas limit

### References
https://docs.soliditylang.org/en/latest/types.html#bytes-and-string-as-arrays
## Fixing the contract
* Loop best practices
* Refactoring for N*O(1)
* Keeping track of operation progress
* Iteration until operation is completed
* Backups and safeguards
* Avoiding loops

### References
https://github.com/wissalHaji/solidity-coding-advices/blob/master/best-practices/be-careful-with-loops.md

