const crypto = require('crypto');
const bs58 = require('bs58');

module.exports = {
    hashing: (data) => {
        if(!data) {
            throw new Error('no data found');
        }

        const hash = crypto.createHash('sha512');
        hash.update(data);
        return bs58.encode(hash.digest());
    }
}