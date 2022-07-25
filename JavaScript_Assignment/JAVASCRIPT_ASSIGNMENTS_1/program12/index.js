function find_longest_word(str)
{
  a = str
  b = str 
  var array1 = a.split(/[aab]+/)  
  var result = array1[0];
  document.write(array1)
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  } 
  return result;
}
document.write("<br>\""+find_longest_word('ababcdababefgababhwslab')+"\"");
document.write("<br>\""+find_longest_word('aba')+"\"");


