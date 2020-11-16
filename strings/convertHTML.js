// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List") should return "Schindler&apos;s List".
// convertHTML("<>") should return "&lt;&gt;".
// convertHTML("abc") should return "abc".



function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  str=str.split("")
  let result=[]
  for(let i =0; i<str.length; i++){
    //console.log(htmlEntities[str[i]])
    if(htmlEntities[str[i]]){
      result.push(htmlEntities[str[i]])
    }else{
       result.push(str[i])
    }
  }
  //console.log(result.join(""))
  return result.join("");
}

convertHTML("<>");

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
