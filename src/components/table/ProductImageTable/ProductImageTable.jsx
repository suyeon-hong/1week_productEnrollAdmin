import React from 'react'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'
import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_IMAGES } from '@contexts/TableContext/types'

const ProductImageTable = ({ check = true }) => {
  const { productionImages } = useTableState()
  const dispatch = useTableDispatch()

  const setImage = (imageType) => {
    return (images) => {
      dispatch({
        type: CHANGE_PRODUCTION_IMAGES,
        payload: { [imageType]: images },
      })
    }
  }

  return (
    <>
      {check && (
        <Table thead="상품 소개 이미지">
          <ImageContainer
            itemList={productionImages.productionImages}
            setItemList={setImage('productionImages')}
          />
        </Table>
      )}
    </>
  )
}

export default ProductImageTable
