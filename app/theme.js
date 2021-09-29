import { createTheming } from '@callstack/react-theme-provider'

const colorOptions = [
  {
    background: '#FBD8C9',
    text: '#434343'
  },
  {
    background: '#EFE1CE',
    text: '#434343'
  },
  {
    background: '#E0E6D6',
    text: '#434343'
  },
  {
    background: '#D2E8DF',
    text: '#434343'
  },
  {
    background: '#E2EAEB',
    text: '#434343'
  },
  {
    background: '#F5B0BD',
    text: '#030303'
  },
  {
    background: '#D198C5',
    text: '#030303'
  },
  {
    background: '#F0A1BF',
    text: '#030303'
  },
  {
    background: '#F7CFE1',
    text: '#030303'
  },
  {
    background: '#BFD5EB',
    text: '#030303'
  },
  {
    background: '#575358',
    text: '#FEFEFE'
  },
  {
    background: '#545A3E',
    text: '#FEFEFE'
  },
  {
    background: '#64242E',
    text: '#FEFEFE'
  },
  {
    background: '#A21441',
    text: '#FEFEFE'
  },
  {
    background: '#274374',
    text: '#FEFEFE'
  }
]

const fontOptions = [
  {
    label: 'Ideal Sans',
    regular: 'IdealSans-Light',
    bold: 'IdealSans-Medium'
  },
  {
    label: 'San Francisco',
    regular: 'System',
    bold: 'System'
  },
  {
    label: 'Avenir Next',
    regular: 'AvenirNext-Regular',
    bold: 'AvenirNext-Bold'
  },
  {
    label: 'Helvetica Neue Light',
    regular: 'HelveticaNeue-Light',
    bold: 'HelveticaNeue-Medium'
  },
  {
    label: 'Gill Sans',
    regular: 'GillSans-Light',
    bold: 'GillSans-Bold'
  },
  {
    label: 'Baskerville',
    regular: 'Baskerville',
    bold: 'Baskerville-Bold'
  },
  {
    label: 'Hoefler Text',
    regular: 'HoeflerText-Regular',
    bold: 'HoeflerText-Regular'
  },
  {
    label: 'Palatino',
    regular: 'Palatino',
    bold: 'Palatino'
  }
]

const colors = {
  primaryColor: 'red',
  secondaryColor: 'blue',
  backgroundColor: colorOptions[0].background,
  textColor: colorOptions[0].text,
  white: 'white'
}

const fonts = {
  regular: fontOptions[0].regular,
  bold: fontOptions[0].bold
}

const views = {
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  page: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 20
  }
}

const sizes = {
  title: 36,
  heading: 24,
  label: 20,
  body: 18,
  button: 16,
  sublabel: 14,
  icon: 32
}

const text = {
  title: {
    fontSize: sizes.title,
    color: colors.textColor,
    fontFamily: fonts.regular
  },
  heading: {
    fontSize: sizes.heading,
    color: colors.textColor,
    fontFamily: fonts.regular
  },
  body: {
    fontSize: sizes.body,
    color: colors.textColor,
    fontFamily: fonts.regular
  },
  label: {
    fontSize: sizes.label,
    color: colors.textColor,
    fontFamily: fonts.regular
  },
  button: {
    fontSize: sizes.button,
    color: colors.textColor,
    fontFamily: fonts.regular
  },
  icon: {
    fontSize: sizes.icon,
    color: colors.textColor,
    marginBottom: 5
  }
}

const defaultTheme = {
  ...colors,
  text,
  fonts,
  sizes,
  views
}

const { ThemeProvider, useTheme } = createTheming(defaultTheme)

export { ThemeProvider, useTheme, defaultTheme, colorOptions, fontOptions }
