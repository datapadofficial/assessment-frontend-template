# ./core

The core layer is a common resource shared by our web and mobile clients. To reduce repetation, it consists of logical and logistic operations which are needed to be handled in clients such as data definitions and data fetching.

There's no need to install anything for using the core layer. Each client references the core layer in their own project files. So, the core layer is compiled statically as in a part of respective client's codebase.
