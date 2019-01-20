# Init ========================================================================

# ES2015
# 
# npm install --save-dev babel-core
# npm install --save-dev babel-preset-es2015
# npm install --save-dev babel-loader

function web::init-project() {
    # Project structure.
    mkdir -p "${project_home}"
    mkdir -p "${project_home}/public"
    mkdir -p "${project_home}/src"
    mkdir -p "${project_home}/dist"
    # npm modules
    npm init
}

# TypeScript ==================================================================
 
function web::install-typescript() {
    npm install --save-dev typescript
    npm install --save-dev awesome-typescript-loader
}


function web::create-default-tsconfig() {
    cat > "${project_home}/tsconfig.json" << EOF
"compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
EOF
}

# WebPack =====================================================================

function web::install-webpack() {
    npm install --save-dev webpack
    npm install --save-dev webpack-cli
}

function web::create-webpack-ts-config() {
    cat > "${project_home}/webpack.config.js" << EOF
const path = require('path');
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
        ]
    },
};
EOF
}

# TypeScript Ptoject Stub =====================================================

function create-typescript-stub() {
    # HTML stub,
    cat > "${project_home}/public/index.html" << EOF 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Webpack/TypeScript Project</title>
  </head>
  <body>
  <script src="main.bundle.js"></script>
  </body>
</html>
EOF

    # TypeScript stub.
    cat > "${project_home}/src/index.ts" << EOF
class Administrator {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = \`${firstName} ${middleInitial} ${lastName}\`;
    }
}

interface User {
    firstName: string;
    lastName: string;
}

function motd(person : Person) {
    return \`Wotacha, ${person.firstName} ${person.lastName}\`;
}

const admin = new Adminstrato('Temple', 'Z', 'Cloud');
document.body.innerHTML = greeter(admin);
EOF
}

# Build =======================================================================

function web::build() {
    # Build/Transpile
    ./node_modules/.bin/webpack
    cp public/index.html dist
}

# Main ========================================================================

if [ -z "${PROJECT_HOME}" ]; then
    echo "No PROJECT_HOME was set. Defaulting to 'example'."
    project_home="example"
else
    project_home="${PROJECT_HOME}"
fi

if [ -z "{$1}"]; then
    web::$@
fi