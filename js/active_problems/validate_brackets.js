/**
 * Given a string containing only brackets
 * {} - Curly
 * () - Parens
 * [] - Bracket
 * Return whether the string is properly balanced
 *
 * for each opening run findClose of the appropriate type.
 * Must close innermost first
 * If close, then remove from array
 * {[(])}
 *
 *
 * */

function parity(string) {
  let i = 0;
  for (i; i < string.length; i++) {
    if (string[i] == "}" || string[i] == "]" || string[i] == ")") {
      return false;
    }

    if (string[i] == "(") {
      if (isClosedParens(i) == false) {
          return false;
      }
      i--;
    }

    if (string[i] == "[") {
      if (isClosedBrackets(i) == false) {
        return false;
        }
      i--;
    }
    if (string[i] == "{") {
      if (isClosedCurly(i) == false) {
        return false;
      }
      i--;
    }
  }

  function isClosedParens(i) {
    for (let advance = i + 1; advance < string.length; advance++) {
      if (string[advance] == "}" || string[advance] == "]") {
        return false;
      } 

      if (string[advance] == ")") {
        string  = string.slice(0, i) + string.slice(advance + 1);
        return;
      }

      if (string[advance] == "(") {
        if (isClosedParens(advance) == false) {
            return false;
        }
      }

      if (string[advance] == "[") {
        if (isClosedBrackets(advance) == false) {
            return false;
        }
      }
      if (string[advance] == "{") {
        if (isClosedCurly(advance) == false) {
            return false;
        }
      }
    }
  }

  function isClosedBrackets(i) {
    for (let advance = i + 1; advance < string.length; advance++) {
      if (string[advance] == "}" || string[advance] == ")") {
        return false;
      } 
      if (string[advance] == "]") {
        string  = string.slice(0, i) + string.slice(advance + 1);
        return;      
      }

      if (string[advance] == "(") {
        if (isClosedParens(advance) == false) {
            return false;
        }
      }

      if (string[advance] == "[") {
        if (isClosedBrackets(advance) == false) {
            return false;
        }
      }
      if (string[advance] == "{") {
        if (isClosedCurly(advance) == false) {
            return false;
        }
      }
    }
  }


  function isClosedCurly(i) {
    for (let advance = i + 1; advance < string.length; advance++) {
      if (string[advance] == ")" || string[advance] == "]") {
        return false;
      } 
      
      if (string[advance] == "}") {
        string  = string.slice(0, i) + string.slice(advance + 1);
        return;      
      }

      if (string[advance] == "(") {
        if (isClosedParens(advance) == false) {
            return false;
        }
      }

      if (string[advance] == "[") {
        if (isClosedBrackets(advance) == false) {
            return false;
        }
      }
      if (string[advance] == "{") {
        if (isClosedCurly(advance) == false) {
            return false;
        }
      }
    }
  }

  return true;
}
console.log(parity('a(b[c{d}e]f)g'))
