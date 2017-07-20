
/**
 * Gets the current environment based on NODE_ENV var
 * @returns {object} Environment
 */
export default function(){
    return {
        name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    }
}
