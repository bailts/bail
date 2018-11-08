import * as crypto from 'crypto'

class Password{
    public static encrypt(password) : String
    {
        const hash = crypto.createHash('sha256')
        return hash.update(password + 'ENC_RANDOMPARATODOS').digest('hex')
    }
}

export default Password