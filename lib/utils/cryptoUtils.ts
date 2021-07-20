const crypto = require('crypto');
const bs58 = require('bs58');

export const hashing = (data: string) => {
    if(!data) {
        throw new Error('no data found');
    }
    const hash = crypto.createHash('sha512');
    hash.update(data);

    return bs58.encode(hash.digest());
}

console.log('this', this);
console.log('module.exports', module.exports);
console.log('exports', exports);
