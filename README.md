# Product Catalog Console Application

This is a console application written in TypeScript that allows you to enter products into a catalog. The specific fields for each product type are different, and the application provides a command-line interface for interacting with the catalog.

## Business Requirements

- The application should allow the user to add products to the catalog.
- The input fields required for each product type should vary.
- The application should validate user input and provide appropriate feedback.
- The application should allow the user to view the list of entered products.

## Technical Requirements

- The application is written in TypeScript.
- The user interface is implemented in the console (terminal) using a command-line interface.
- Command validation is mandatory.
- Frameworks and libraries can be used as needed.
- Abstractions are optional but recommended for better code organization.

## Getting Started

1. Clone the repository:

   `git clone https://github.com/parpiyev/bitbucket`

2. Install the dependencies:

   `npm install`

3. Run the application:

   `npm start`

## Usage

- To add a product to the catalog, enter the command `add product` and follow the prompts to provide the product type, name, and specific fields depending on the product type.
- To view the list of entered products, enter the command `show list`.

## Examples

1. Console: Command `add product` - Add product to add a product. `show list` to show the list of entered products.:

   - `add product`

2. Console: Enter product type. Available types: `ice cream`, `soft drink`:

   - `ice cream`

3. Console: Enter product name:

   - `Delicious ice`

4. Console: Enter unit weight in grams:

   - `150`

5. Console: Product added

6. Console: Command `add product` - Add product to add a product. `show list` to show the list of entered products.`

   - `show list`

7. Console: List of entered products:

   - `Type: ice cream`
   - `Name: Delicious ice`
   - `Weight: 150 grams`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
