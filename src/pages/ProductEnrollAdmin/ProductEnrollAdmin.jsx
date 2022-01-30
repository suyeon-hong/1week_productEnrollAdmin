import React, { useContext, useState } from 'react'
import * as S from './Style'
import theme from '@style/theme'
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
import { SaveModal } from '@components/domain'
import { checkValidation } from '@utils/functions'
import { useTableState } from '@contexts/TableContext/TableProvider'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { InformationContext } from '@contexts/InformationContext/InformationProvider'
import { useModal } from '@hooks'

const ProductEnrollAdmin = () => {
  const tableState = useTableState()
  const { options } = useContext(OptionContext)
  const { informations } = useContext(InformationContext)
  const { isShowing, toggle } = useModal()
  const [modalContents, setModalContents] = useState('')

  const handleClick = (e) => {
    const { productionInformation } = tableState
    if (checkValidation(productionInformation, options[0]?.optionInfo[0])) {
      setModalContents('저장되었습니다!')
      console.log(productionInformation, '상품 기본 정보')
      console.log(options, '상품 옵션')
      console.log(informations, '상품 정보 고시')
    } else {
      setModalContents('필수값을 입력해주세요!')
    }
    toggle(e)
  }

  return (
    <>
      <S.Logo>Sir.LOIN</S.Logo>
      <S.PageWrapper>
        <Gnb />
        <S.Form onSubmit={(e) => e.preventDefault()}>
          <S.Title>
            상품 등록
            <Button
              type="submit"
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
          <S.FormInner>
            <SetPeriodTable />
            <ProductionInformation />
            <OptionTable />
            <ProductImageTable />
            <RecommendImageTable />
            <ItemDeliverySetting />
            <ItemInformationTable />
            <ItemBenefitSetting />
            <OtherSetting />
          </S.FormInner>
        </S.Form>
      </S.PageWrapper>
      <Modal isShowing={isShowing} close={toggle}>
        <SaveModal close={toggle} children={modalContents} />
      </Modal>
    </>
  )
}

export default ProductEnrollAdmin
