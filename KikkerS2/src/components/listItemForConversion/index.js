import React from 'react'
import ListConversion from './component/listConversion'
import ListConversionDetail from './component/listConversionDetail'

export default ({ isList }) => {
  if (isList) return <ListConversionDetail />
  return <ListConversion />
}
