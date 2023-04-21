const Generator = require('yeoman-generator');

// 
module.exports = class extends Generator {
    installDependencies() {
        this.spawnCommandSync("pnpm", [
            "add",
            "-D",
            "prettier",
            "eslint",
            "eslint-config-prettier",
            "eslint-config-standard",
            "eslint-plugin-import",
            "eslint-plugin-node",
            "eslint-plugin-n",
            "eslint-plugin-prettier",
            "eslint-plugin-promise",
            "eslint-plugin-react",
            "eslint-plugin-react-hooks",
            "tailwindcss",
            "postcss",
            "autoprefixer",
            "@typescript-eslint/parser",
            "@typescript-eslint/eslint-plugin",
        ]);
    }

    // Copy files

    eslint() {
        this.fs.copy(
            this.templatePath('.eslintrc.cjs'),
            this.destinationPath('.eslintrc.cjs')
        );
    }
    vscode() {
        this.fs.copy(
            this.templatePath('.vscode'),
            this.destinationPath('.vscode')
        );
    }
    eslintIgnore() {
        this.fs.copy(
            this.templatePath('.eslintignore'),
            this.destinationPath('.eslintignore')
        );
    }
    editorconfig() {
        this.fs.copy(
            this.templatePath('.editorconfig'),
            this.destinationPath('.editorconfig')
        );
    };

    tsconfig() {
        this.fs.copy(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );
    }

    // Create files to destination folder

    tailwind() {
        this.fs.copy(
            this.templatePath('tailwind.config.js'),
            this.destinationPath('tailwind.config.js')
        );
    }

    postcss() {
        this.fs.copy(
            this.templatePath('postcss.config.js'),
            this.destinationPath('postcss.config.js')
        );
    }

}