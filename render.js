const fs = require('fs');
const path = require('path');

module.exports = {
    render(file) {
        return fs.readFileSync(path.resolve('html', file), {encoding: 'utf-8'});
    }
}
