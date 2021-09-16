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
 *Feed brackets into helpers
 * Make functions variables
 * */

function parity(string) {
  for (let i = 0; i < string.length; i++) {
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
        string = string.slice(0, i) + string.slice(advance + 1);
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
        string = string.slice(0, i) + string.slice(advance + 1);
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
        string = string.slice(0, i) + string.slice(advance + 1);
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
function validateBrackets(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
      stack.push(string[i]);
    } else if (string[i] == ")" && stack.pop() != "(") {
      return false;
    } else if (string[i] == "}" && stack.pop() != "{") {
      return false;
    } else if (string[i] == "]" && stack.pop() != "[") {
      return false;
    }
  }
  return stack.length == 0;
}


function validateBrackets2(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '[':
        stack.push(']');
        break;

      case '{':
        stack.push('}');
        break;

      case '(':
        stack.push(')');
        break;

      default:
        if (stack.pop() != string[i]) {
          return false;
        }
    }
  }
  return stack.length == 0;
}

var isValid = function(s) {   
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  
  for (let i = 0 ; i < s.length ; i++) {
      const c = s[i];
      if (map[c]) {
        stack.push(map[c])
      } else if (c !== stack.pop()) {
        return false;
      } 
  }
  
  return !stack.length;
};
console.log(validateBrackets("({[("));
