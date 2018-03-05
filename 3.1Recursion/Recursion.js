let array = [[1, 2, [3]], 4];
let result = [];

flattenArray = (a) =>
  {
      for(let i=0; i<a.length; i++)
      {
        if(Array.isArray(a[i]))
        {
          flattenArray(a[i]);
        }
        else
        {
          result.push(a[i]);
        }
      }
  }

flattenArray(array);
console.log(result);
