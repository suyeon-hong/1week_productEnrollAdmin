import { OptionSetRow } from '@components/rows'
import { Table, Button, Box } from '@components/base'
import theme from '@style/theme'
import * as S from './Style'
import { useEffect, useState, useReducer } from 'react'
import {
  initialValue,
  reducer,
  ADD_OPTION,
} from '../../../reducer/optionReducer'

const OptionTable = () => {
  // const [options, setOptions] = useState([])
  const [options, dispatch] = useReducer(reducer, [])

  // 기본 데이터
  const optionInfo = {
    optionName: '',
    normalPrice: 0,
    price: 0,
    stock: 0,
    isTax: true,
  }

  const addOptions = {
    addOptionName: '',
    addOptionNormalPrice: 0,
  }

  const AddValue = {
    imageInfo: {},
    optionInfo: {
      optionName: '',
      normalPrice: 0,
      price: 0,
      stock: 0,
      isTax: true,
    },
    addOptions: [{ addOptionName: '', addOptionNormalPrice: 0 }],
  }

  // useEffect(() => {
  //   console.log(options, 'options')
  // }, [options])

  const AddOptionSet = () => {
    console.log('addOption')
    dispatch({ type: ADD_OPTION, payload: AddValue })
  }

  return (
    <Table thead="상품 옵션*" className="noPadding">
      <Button
        width={130}
        height={theme.table.baseHeight}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClick={AddOptionSet}
      >
        + 옵션 세트 추가
      </Button>
      {options.length > 0 ? (
        <OptionSetRow options={options} />
      ) : (
        <S.AlertText className="alertText">
          <span>옵션 세트를 추가하여 옵션을 구성해 주세요.</span>
        </S.AlertText>
      )}
    </Table>
  )
}

export default OptionTable
