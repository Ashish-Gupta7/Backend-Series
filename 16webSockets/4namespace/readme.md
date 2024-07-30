## namespace

1. Definition: A namespace is a way to segment the connection into different channels. Each namespace operates independently of others and can have its own event listeners and handlers.
2. Default Namespace: The default namespace is / and is implicitly used if no namespace is specified.
3. Custom Namespaces: Custom namespaces can be created using a path, e.g., /chat, /news, etc.

Namespaces in Socket.IO are a way to create separate communication channels or "rooms" within the same connection.

## Why Use Namespaces?

1. Modularity: Helps in organizing the code by separating different functionalities into different namespaces.
2. Efficiency: Reduces the overhead of listening to all events on a single connection.
3. Scalability: Makes it easier to scale parts of the application independently.

Namespaces in Socket.IO allow you to create isolated communication channels within a single connection, which helps in organizing and managing different parts of your application efficiently. The provided code demonstrates how to set up and use namespaces on both the server and client sides.

## You switch between different namespaces (categories) by clicking the buttons. Each namespace can handle its own events independently.
