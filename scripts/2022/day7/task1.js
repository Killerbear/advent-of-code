function solve2022Day7Task1(inputString) {
    let tree = createTree(inputString);
    return tree
        .getDirectorySizesSumArray()
        .filter((sizes) => sizes <= 100000)
        .reduce((sum, size) => sum + size);
}

function createTree(treeInputString) {
    let generatedTree = new directory();
    let currentDirectory = generatedTree;

    treeInputString
        .split("$ ")
        .slice(2)
        .map((input) => {
            if (input.includes("cd ..")) {
                currentDirectory = currentDirectory.parent;
                return;
            }

            if (input.includes("cd")) {
                let dir = new directory();
                dir.parent = currentDirectory;
                currentDirectory.children.push(dir);
                currentDirectory = dir;
                return;
            }

            if (input.includes("ls")) {
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
    filesize = 0;
    parent = null;
    children = [];

    getDirectorySizes() {
        if (this.children.length !== 0) {
            return [this.filesize, ...this.children.map((directory) => directory.getDirectorySizes()).flat()];
        } else {
            return [this.filesize];
        }
    }

    getDirectorySizesSum() {
        return this.getDirectorySizes().reduce((sum, size) => sum + size);
    }

    getDirectorySizesSumArray() {
        if (this.children.length !== 0) {
            return [
                this.getDirectorySizesSum(),
                ...this.children.map((directory) => directory.getDirectorySizesSumArray()).flat(),
            ];
        } else {
            return [this.getDirectorySizesSum()];
        }
    }
}
