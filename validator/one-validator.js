class Validator {
  constructor(config) {
    this.config = config
    this.messages = new Set()
    this.handlers = {}
  }

  hasErrors() {
    return this.messages.length !== 0
  }

  validate(data) {
    this.data = data
    // reset all previous error messages
    this.messages = new Set()

    for (let key in data) {
      const dictItem = data[key] // obj
      // check for user specified checks
      for (let i in config) {
        const matcherName = this.config[i]
        const matcher = this.handlers[matcherName]

        if (!matcher) {
          throw {
            name: 'ValidationError',
            message: `No handler for this ${matcherName}`,
          }
        }

        const result = matcher.validate.call(this, dictItem)

        if (result) {
          this.messages.add(matcher.errorMsg)
        }
      }
    }

    return this.hasErrors()
  }
}

const config = ['cycle']

const oneValidator = new Validator(config)

oneValidator.handlers = {
  cycle: {
    // Object → Boolean
    validate(dictItem) {
      const rangeObj = this.data[dictItem.range]
      if(rangeObj) {
        this.messages.add(rangeObj.domain) 
        this.messages.add(dictItem.domain)
      }
      return false
    },
    errorMsg: 'This item is cyclic',
  },
}

module.exports = oneValidator
