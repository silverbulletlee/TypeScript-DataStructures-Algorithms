/*
 * @Description: 写一个简单的脚本fix tsc编译不转换相对路径问题
 * @Author: silverbulletlee
 */

const {
    resolve,
    relative,
    extname
} = require('path');
const {
    readdir,
    stat,
    readFile,
    writeFile
} = require('fs');

const babylon = require('babylon');
const types = require("@babel/types");
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const rootPath = process.cwd();

const {
    compilerOptions: {
        outDir,
        paths
    },
    include: [targetDir]
} = require(resolve(rootPath, 'tsconfig'));

const pathsMap = Object.entries(paths).reduce((paths, [alias, path]) => ({
    ...paths,
    [alias]: resolve(rootPath, path[0].replace(targetDir, outDir))
}), paths);

const getFiles = (dirPath) => {
    readdir(dirPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.map(fileName => resolve(dirPath, fileName)).forEach(fileDir => {
            stat(fileDir, (err, stats) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (stats.isDirectory()) {
                    getFiles(fileDir);
                }
                if (stats.isFile() && extname(fileDir) === '.js') {
                    compileFile(fileDir, dirPath);
                }
            });
        });
    });
};

const compileFile = (filePath, dirPath) => {
    readFile(filePath, (err, code) => {
        if (err) {
            console.log(err);
            return;
        }
        code = code.toString();
        let ast = babylon.parse(code);
        traverse(ast, {
            StringLiteral(path) {
                if (pathsMap[path.node.value]) {
                    path.replaceWith(types.stringLiteral(relative(dirPath, pathsMap[path.node.value])))
                }
            }
        });
        let output = generate(ast, {}, code);
        writeFile(filePath, output.code, err => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
};

getFiles(resolve(rootPath, outDir));
