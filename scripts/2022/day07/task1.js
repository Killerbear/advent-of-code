function solve2022Day07Task1(inputString) {
    let tree = createTree(inputString);
    return tree
        .getDirectorySizesArray()
        .filter((sizes) => sizes <= 100000)
        .reduce((sum, size) => sum + size);
}

function createTree(treeInputString) {
    let generatedTree = new directory("/");
    let currentDirectory = generatedTree;

    treeInputString
        .split("$ ")
        .slice(2)
        .map((input) => {
            if (input.includes("cd ..")) {
                currentDirectory = currentDirectory.parent;
                return;
            }

            if (input.slice(0, 2) === "cd") {
                let dir = new directory(input.split(" ").pop().trim());
                dir.parent = currentDirectory;
                currentDirectory.children.push(dir);
                currentDirectory = dir;
                return;
            }

            if (input.slice(0, 2) === "ls") {
                input
                    .split("\n")
                    .slice(1)
                    .filter((input) => input !== "")
                    .map((fileOrDirectory) => {
                        if (!fileOrDirectory.includes("dir")) {
                            let file = fileOrDirectory.split(" ");
                            currentDirectory.filesize += parseInt(file[0], 10);
                        }
                    });
            }
        });

    return generatedTree;
}

class directory {
    name = "";
    filesize = 0;
    dirSize = 0;
    parent = null;
    children = [];

    constructor(name) {
        this.name = name;
    }

    getDirectorySize() {
        if (this.children.length !== 0) {
            let sum = 0;
            this.children.forEach((child) => (sum += child.getDirectorySize()));
            this.dirSize = this.filesize + sum;
            return this.filesize + sum;
        }
        this.dirSize = this.filesize;
        return this.filesize;
    }

    getDirectorySizesArray() {
        if (this.children.length !== 0) {
            return [this.getDirectorySize(), ...this.children.map((child) => child.getDirectorySizesArray()).flat()];
        }
        return this.getDirectorySize();
    }
}
