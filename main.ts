import * as readline from "readline";

interface Product {
  type: string;
  name: string;
  weight?: number;
  volume?: number;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const catalog: Product[] = [];

function addProduct() {
  rl.question(
    "Enter product type. Available types: ice cream, soft drink\n",
    (type) => {
      if (type === "ice cream" || type === "soft drink") {
        rl.question("Enter product name\n", (name) => {
          if (type === "ice cream") {
            rl.question("Enter unit weight in grams\n", (weightStr) => {
              const weight = Number(weightStr);
              if (isNaN(weight)) {
                console.log("Invalid weight. Product not added.");
              } else {
                catalog.push({ type, name, weight });
                console.log("Product added");
              }
              promptCommand();
            });
          } else if (type === "soft drink") {
            rl.question(
              "Enter the volume per unit of product in litres\n",
              (volumeStr) => {
                const volume = Number(volumeStr);
                if (isNaN(volume)) {
                  console.log("Invalid volume. Product not added.");
                } else {
                  catalog.push({ type, name, volume });
                  console.log("Product added");
                }
                promptCommand();
              }
            );
          }
        });
      } else {
        console.log("Invalid product type. Product not added.");
        promptCommand();
      }
    }
  );
}

function showList() {
  if (catalog.length === 0) {
    console.log("List empty");
  } else {
    console.log("List of entered products:");
    catalog.forEach((product) => {
      console.log("Type:", product.type);
      console.log("Name:", product.name);
      if (product.weight) {
        console.log("Weight:", product.weight, "grams");
      }
      if (product.volume) {
        console.log("Volume:", product.volume, "litres");
      }
      console.log("------------------------");
    });
  }
  promptCommand();
}

function promptCommand() {
  rl.question(
    'Command "add product" - Add product to add a product. "show list" to show the list of entered products.\n',
    (command) => {
      if (command === "add product") {
        addProduct();
      } else if (command === "show list") {
        showList();
      } else {
        console.log("Incorrect command was entered:", command);
        promptCommand();
      }
    }
  );
}

promptCommand();
