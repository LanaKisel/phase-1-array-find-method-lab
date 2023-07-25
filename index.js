const record = [
    {
        year: '2020',
        result: 'L'
    },
    {
        year: '2021',
        result: 'W'
    },
    {
        year: '2022',
        result: 'N/A'
    }
]



function superbowlWin(superbowlRecord) {
    const found = superbowlRecord.find(({result}) => {
     return  result === "W"
    });
     if (found === undefined) {
       return undefined
     } else {
       return found.year 
     }
    }
  console.log(superbowlWin(record))
  