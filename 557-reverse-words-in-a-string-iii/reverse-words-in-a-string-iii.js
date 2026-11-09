/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return(
    s.split(" ").map((num)=>num.split("").reverse().join(""))
    .join(" ")
  )  
};