const Generator = require('yeoman-generator');

// 
module.exports = class extends Generator {
    installDependencies() {
        this.spawnCommandSync("pnpm", [
            "add",
            "-D",
            "eslint",
            "eslint-config-prettier",
            "eslint-plugin-prettier",
            "@typescript-eslint/parser",
            "@typescript-eslint/eslint-plugin",
            "eslint-import-resolver-typescript",
            "eslint-plugin-import",
            "@vercel/style-guide",
        ]);
    }

    eslint() {
        this.fs.copy(this.templatePath(".eslintrc.cjs"), this.destinationPath(".eslintrc.cjs"));
        this.fs.delete(this.destinationPath(".eslintrc.json"));
    }

    vscode() {
        this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"));
    }

    eslintIgnore() {
        this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"));
    }

    editorconfig() {
        this.fs.copy(this.templatePath(".editorconfig"), this.destinationPath(".editorconfig"));
    }

}