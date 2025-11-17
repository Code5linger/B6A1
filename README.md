1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are used to annotate data type of values, but they have some differences.

An interface is used to describe objects and classes and can be extended using extends.
We can also define the same interface multiple times and TypeScript will combine the properties.

A type can define objects like an interface but can also create unions, tuples, or primitive type aliases.
Types cannot be merged or re-declared.

While both can describe objects, interfaces are generally preferred for class implementation, where types are used for more unions or tuples.

2. Provide an example of using union and intersection types in TypeScript.

In TypeScript, a union type is like saying a value can be this OR that. For example, if we have a type Pet = "dog" | "cat", then a variable of type Pet can be either "dog" or "cat", but not anything else.

On the other hand, an intersection type is like saying a value must have all the properties of multiple types at the same time. For example, if Animal has a name property and Pet has an isFriendly property, then a type Dog = Animal & Pet must have both name and isFriendly. So, union types are like “OR” choices, while intersection types are like “AND” requirements.
