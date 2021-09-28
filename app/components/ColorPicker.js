import React from 'react'
import chroma from 'chroma-js'
import { colorOptions } from '../theme'
import { TouchableOpacity, View } from 'react-native'

const getSortedColors = () => {
  const chromas = colorOptions.map(c => chroma(c.background))
  const sortedColors = chromas.reduce((acc, cur) => {
    acc.push({ hex: cur.hex(), hsl: cur.hsl(), hsi: cur.hsi() })
    return acc
  }, [])

  sortedColors.sort((a, b) => {
    const aCombined = (a.hsi[2] + a.hsl[2]) / 2
    const bCombined = (b.hsi[2] + b.hsl[2]) / 2
    return bCombined - aCombined
  })

  const sortedColorOptions = []
  for (let sortedOption of sortedColors) {
    const option = colorOptions.filter(c => c.background.toLowerCase() === sortedOption.hex.toLowerCase())
    sortedColorOptions.push(option[0])
  }

  return sortedColorOptions
}

export default ColorPicker = ({ onPress }) => {
  const sortedColors = getSortedColors()

  return (
    <View
      style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 20,
      justifyContent: 'center', alignItems: 'center' }}
    >
      {sortedColors.map(c => (
        <TouchableOpacity
          key={`color-option-${c.background}`}
          activeOpacity={0.6}
          onPress={() => { onPress(c) }}
        >
        <View
          style={{
            width: 60, height: 60, aspectRatio: 1.0, borderRadius: 15,
            backgroundColor: c.background,
            borderColor: '#CCCCCC', borderWidth: 1,
            marginRight: 8,
            marginBottom: 10
            }}
          />
          </TouchableOpacity>
      ))}
    </View>
  )
}
