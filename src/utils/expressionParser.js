const split = (expression, operator) => {
  const result = []
  let braces = 0
  let currentChunk = ''

  expression.split('').forEach(item => {
    if (item === '(') {
      braces++
    } else if (item === ')') {
      braces--
    }

    if (braces === 0 && operator === item) {
      result.push(currentChunk)
      currentChunk = ''
    } else {
      currentChunk += item
    }
  })

  if (currentChunk !== '') {
    result.push(currentChunk)
  }

  return result
}

const parseMultiplicationSeparatedExpression = expression => {
  const numbersString = split(expression, '*')
  const numbers = numbersString.map(noStr => {
    if (Number.isNaN(+noStr))
      return parseDivideSeparatedExpression(noStr)
    return +noStr
  })
  return numbers.reduce((acc, no) => acc * no, 1.0)
}

const parseDivideSeparatedExpression = expression => {
  const numbersString = split(expression.toString(), '/')
  const numbers = numbersString.map(noStr => {
    if (noStr[0] === '(') {
      const expr = noStr.substr(1, noStr.length - 2)
      return parsePlusSeparatedExpression(expr)
    }
    return +noStr
  })
  return numbers.reduce((acc, no, index) => {
    if (index === 0) return
    return acc / no
  })
}

const parseMinusSeparatedExpression = expression => {
  const numbersString = split(expression, '-').map(item => {
    if (item === '') return '0'
    else return item
  })
  const numbers = numbersString.map(noStr =>
    parseMultiplicationSeparatedExpression(noStr),
  )

  return numbers
    .slice(1)
    .reduce((acc, no) => acc - no, numbers[0])
}

export const parsePlusSeparatedExpression = expression => {
  const numbersString = split(expression, '+')
  const numbers = numbersString.map(noStr => {
    return parseMinusSeparatedExpression(noStr)
  })
  const result = numbers.reduce((acc, no) => {
    return +acc + +no
  }, 0)

  return Math.floor(result * 1000) / 1000
}
