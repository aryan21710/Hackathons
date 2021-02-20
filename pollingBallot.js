findWinner = ballot => {
  let cnt = 1;
  const output = ballot.reduce((initial, iter) => {
    cnt = iter in initial ? initial[iter] + 1 : 1;
    initial[iter] = cnt;
    return initial;
  }, {});

  console.log("ballot based on counts", output);
  const swap = {};
  for (let i in output) {
    if (output[i] in swap) {
      swap[output[i]] = swap[output[i]].concat(i);
    } else {
      swap[output[i]] = new Array(i);
    }
  }
  console.log("swap", swap);
  if (swap[Object.keys(swap).length].length > 1) {
    return swap[Object.keys(swap).length].sort()[
      swap[Object.keys(swap).length].sort().length - 1
    ];
  } else {
    return swap[Object.keys(swap).length].pop();
  }
};

console.log(
  "WINNER IS:-",
  findWinner([
    "alex",
    "alex",
    "harry",
    "michael",
    "mary",
    "mary",
    "michael",
    "mary",
    "alex"
  ])
);
