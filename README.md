[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23968465&assignment_repo_type=AssignmentRepo)
# 04.5 - XMLHttpRequest() Review

## Part 1

1. Create two inputs in HTML with: `type="text"` `placeholder` and `ID attributes`. Make one input in the placeholder attribute take a first name. Make another input in the placeholder attribute take a favorite food.
2. Create a button labeled submit.

## Part 2
1. Save each of your inputs in variables using querySelector.
2. Save your button in a variable using querySelector.
3. Create a click handler for your button.


## Part 3 (XMLHttpRequest)

** Within the click handler **

1. Create a variable called xhttp that activates XMLHttpRequest through the following code: 
```
let xhttp = new XMLHttpRequest();
```

2. Under your xhttp variable, copy and paste the code below.

```
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhttp.responseText));
    }
};
```

3. Write the following code:

    1. Create an object variable that stores the values of firstName and favoriteFood. (console.log() the output)

    1. Stringify the object and store to a variable. (console.log() the output)

    1. Copy and paste the code below


```
xhttp.open("POST", " <Await URL Link> ", true);
xhttp.setRequestHeader("Content-Type", "application/json");
```

1. *Copy the Live Feed Link thats on the board into the <Await URL Link>*

4. Write the following code  `xhttp.send();`

5. Update: Pass the stringify variable as a parameter to 
`xhttp.send()`

## Part 4
1. Type your name in the name input, and type your favorite food in the food input. Click send and wait for the results...