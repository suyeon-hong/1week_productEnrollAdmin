import React, { useContext, useState } from 'react'
import * as S from './style'
import theme from '../../style/theme'

import {
  ItemBenefitSetting,
  OtherSetting,
  OptionTable,
  ProductImageTable,
  ProductionInformation,
  SetPeriodTable,
  RecommendImageTable,
  ItemDeliverySetting,
  ItemInformationTable,
} from '@components/table'
import { Modal, Gnb, Button } from '@components/base'
import { checkValidation } from '@utils/functions'
import { useTableState } from '@contexts/TableContext/TableProvider'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { useModal } from '@hooks'
import SaveModal from '@components/domain/SaveModal/SaveModal'

const ProductEnrollAdmin = () => {
  const tableState = useTableState()
  const { options } = useContext(OptionContext)
  const { isShowing, toggle } = useModal()
  const [modalContents, setModalContents] = useState('')

  const handleClick = (e) => {
    const { productionInformation } = tableState
    if (checkValidation(productionInformation, options[0].optionInfo[0])) {
      setModalContents('저장되었습니다!')
    } else {
      setModalContents('필수값을 입력해주세요!')
    }
    toggle(e)
    console.log(productionInformation)
    console.log(options)
  }

  return (
    <>
      <S.Logo>Sir.LOIN</S.Logo>
      <S.PageWrapper>
        <Gnb />
        <S.FormWrapper>
          <S.Title>
            상품 등록
            <Button
              width={100}
              height={35}
              background={theme.color.purple}
              color={'#fff'}
              style={{
                transform: 'translateX(70vw)',
              }}
              onClick={handleClick}
            >
              저장하기
            </Button>
          </S.Title>
          <S.Form>
            <SetPeriodTable />
            <ProductionInformation />
            <OptionTable />
            <ProductImageTable />
            <RecommendImageTable />
            <ItemDeliverySetting />
            <ItemInformationTable />
            <ItemBenefitSetting />
            <OtherSetting />
          </S.Form>
        </S.FormWrapper>
      </S.PageWrapper>
      <Modal isShowing={isShowing} close={toggle}>
        <SaveModal close={toggle} children={modalContents} />
      </Modal>
    </>
  )
}

export default ProductEnrollAdmin
