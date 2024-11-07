// Problem #01:
function customMap(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const array = [1, 2, 3];
const result = customMap(array, (num) => num * 2);
console.log(result);

// Problem #02:
function findDuplicates(array1) {
  let result1 = [];
  let seen = new Set();

  for (let i = 0; i < array1.length; i++) {
    if (seen.has(array1[i]) && !result1.includes(array1[i])) {
      result1.push(array1[i]);
    } else {
      seen.add(array1[i]);
    }
  }
  return result1;
}

const array1 = [1, 2, 3, 2, 4, 3, 5];
const duplicates = findDuplicates(array1);
console.log(duplicates);

// Problem #03:
function queryStringToObject(query) {
  const params = query.split("?")[1];
  const result = {};

  if (params) {
    const pairs = params.split("&");

    pairs.forEach((param) => {
      const [key, value] = param.split("=");
      if (key && value) {
        result[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
  }

  return result;
}

const queryString = "?name=Hasib&age=23&city=Dhaka";
const queryObject = queryStringToObject(queryString);
console.log(queryObject);

// Problem #04:
function reverseWords(str) {
  const words = str.split(" ");

  const reversedWords = words.reverse();

  return reversedWords.join(" ");
}

const str = "Hello World";
console.log(reverseWords(str));

// Problem #05:
function findMissingNumber(array2) {
  const n = array2.length;
  let sumOfN = (n * (n + 1)) / 2;
  let result2 = 0;

  for (let i = 0; i < n; i++) {
    result2 += array2[i];
  }
  return sumOfN - result2;
}

const array2 = [0, 1, 3, 4, 5];
console.log(findMissingNumber(array2));

// Problem #06:
function validateForm(email, password, confirmPassword) {
  let isValid = true;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    console.log("Please enter a valid email address.");
    isValid = false;
  } else if (!email) {
    console.log("All fields are required.");
    isValid = false;
  } else if (!password) {
    console.log("Password fields are required.");
    isValid = false;
  } else if (!confirmPassword) {
    console.log("Confirm Password fields are required.");
    isValid = false;
  } else if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");
    isValid = false;
  } else if (!/[A-Z]/.test(password)) {
    console.log("Password must contain at least one uppercase letter.");
    isValid = false;
  } else if (!/\d/.test(password)) {
    console.log("Password must contain at least one number.");
    isValid = false;
  } else if (password !== confirmPassword) {
    console.log("Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    console.log({ email, password, confirmPassword });
  }
  return isValid;
}

const email = "rasi@example.com";
const password = "Pass1234";
const confirmPassword = "Pass1234";
validateForm(email, password, confirmPassword);

// Problem #07:
function generateGreeting(language, timeOfDay, name) {
  let greeting = "";

  if (language === "English") {
    switch (timeOfDay) {
      case "morning":
        greeting = `Good morning, ${name}!`;
        break;
      case "afternoon":
        greeting = `Good afternoon, ${name}!`;
        break;
      case "evening":
        greeting = `Good evening, ${name}!`;
        break;
      default:
        greeting = `Please provide timeOfDay or check the spelling!`;
    }
  } else if (language === "Spanish") {
    switch (timeOfDay) {
      case "morning":
        greeting = `¡Buenos días, ${name}!`;
        break;
      case "afternoon":
        greeting = `¡Buenas tardes, ${name}!`;
        break;
      case "evening":
        greeting = `¡Buenas noches, ${name}!`;
        break;
      default:
        greeting = `Please provide timeOfDay or check the spelling!`;
    }
  } else if (language === "Bangla") {
    switch (timeOfDay) {
      case "morning":
        greeting = `¡শুভ সকাল, ${name}!`;
        break;
      case "afternoon":
        greeting = `¡শুভ বিকাল, ${name}!`;
        break;
      case "evening":
        greeting = `¡শুভ সন্ধ্যা, ${name}!`;
        break;
      default:
        greeting = `Please provide timeOfDay or check the spelling!`;
    }
  } else {
    console.log("Please provide language or check the spelling!");
  }
  return greeting;
}

console.log(generateGreeting("English", "morning", "Rafi"));

// Problem #08:
function fullName(person) {
  const { title = "", firstName, middleName = "", lastName } = person;

  let fullName = `${firstName} ${lastName}`;

  if (middleName) {
    fullName = `${firstName} ${middleName} ${lastName}`;
  }

  if (title) {
    fullName = `${title} ${fullName}`;
  }
  return fullName;
}

const person = {
  title: "Mr.",
  firstName: "Rafi",
  middleName: "Bin",
  lastName: "Wores",
};

console.log(fullName(person));

// Problem #09:
function mergeArrays(arr1, arr2) {
  const mergeArray = [...arr1, ...arr2];
  const newArray1 = [...new Set(mergeArray)];
  const sortedArray = newArray1.sort((a, b) => a - b);

  return sortedArray;
}

const array3 = [3, 1, 4];
const array4 = [2, 4, 5];
console.log(mergeArrays(array3, array4));


// Problem #10:
function mergeObjects(obj1, obj2) {
  const merged = {};
  Object.assign(merged, obj1, obj2);

  for (let key in merged) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    
    if (typeof value1 === 'object' && typeof value2 === 'object' && !Array.isArray(value1) && !Array.isArray(value2)) {
      merged[key] = mergeObjects(value1, value2);
    }
    else if (value1 !== undefined && value2 !== undefined && value1 !== value2) {
      merged[key] = [value1, value2];
    }
    else if (value1 !== undefined) {
      merged[key] = value1;
    } else if (value2 !== undefined) {
      merged[key] = value2;
    }
  }
  return merged;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, a: 4 };
console.log(mergeObjects(obj1, obj2)); 