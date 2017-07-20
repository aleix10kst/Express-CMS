import '../../src/lib/utils'
import '../globalTest'

describe('@Utils', () => {
    it('should be an object',() => {
        assert.typeOf(utils,'Object','utils shoud be an object');
    })
})